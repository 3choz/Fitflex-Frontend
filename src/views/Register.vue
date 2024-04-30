<template>
    <div class="user-auth-page-container">
        <div class="signup-image">
            <!-- <img alt="Man Lifting" src="../assets/man-lifting.png"> -->
        </div>
        <div class="register user-auth-input-box">
            <h2>Sign Up Here</h2>
            <form @submit.prevent="submitForm">
                <div>
                    <div>
                        <label for="firstName">First Name</label>
                        <input v-model="firstName" type="text" placeholder="First Name" required>
                    </div>
                    <div>
                        <label for="lastName">Last Name</label>
                        <input v-model="lastName" type="text" placeholder="Last Name" required>
                    </div>
                </div>
                <div>
                    <label for="dob">Date of Birth</label>
                    <input v-model="dateOfBirth" type="date" required>
                </div>
                <div>
                    <label for="sex">Sex</label>
                    <select v-model="sex" placeholder="Sex" name="sex" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label for="phoneNumber">Phone Number (ex: ###-###-####)</label>
                    <input v-model="phoneNumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone Number" required>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input v-model="email" type="email" placeholder="Email" required>
                </div>
                <div>
                    <label for="confirmEmail">Confirm Email</label>
                    <input v-model="confirmEmail" type="email" placeholder="Email" required>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input v-model="password" type="password" placeholder="Password" required>
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required>
                </div>
                <button class="button-link" type="submit">Sign Up</button>
            </form>

            Already have an account?
            <router-link to="/login">
                Click Here to Sign In
            </router-link>
        </div>

    </div>
    <br><br><br><br>
</template>

<script>
import { UserModel } from "@/models/UserModel";
import { createUser } from "@/utils/api/UserApiUtil";
import { saveUserToSession } from "@/utils/session/SessionUtils";
import { getPrograms, updateUserAssignedProgram } from "@/utils/api/ProgramsApiUtil";
import { mapActions } from "vuex";

export default {
    name: 'Register',
    data() {
        return {
            defaultProgram: null,
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            sex: "",
            phoneNumber: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: ""
        }
    },
    async mounted(){
        const programs = await getPrograms();
        this.defaultProgram = programs[0];
        console.log("Default Program for sign in", this.defaultProgram, this.defaultProgram.toString())
    },
    methods: {
        ...mapActions(['userSignIn']),
        async submitForm() {
            if (this.email !== this.confirmEmail) {
                alert("Emails do not match");
                return;
            }

            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            const user = new UserModel(this.email, 0, this.defaultProgram.getId(), this.firstName, this.lastName, this.dateOfBirth, this.sex, this.phoneNumber);
            const userCreationResult = await createUser(user, this.password);
            console.log("Result of createuser", userCreationResult, userCreationResult.toString());

            if(userCreationResult.getIsSuccessful()){
                await updateUserAssignedProgram(user, this.defaultProgram);
                saveUserToSession(user, this.userSignIn);
            } else {
                alert(userCreationResult.getMessage());
            }
        }
    }
}
</script>
