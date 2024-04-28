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
                        <input v-model="firstName" type="text" placeholder="First Name">
                    </div>
                    <div>
                        <label for="lastName">Last Name</label>
                        <input v-model="lastName" type="text" placeholder="Last Name">
                    </div>
                </div>
                <div>
                    <label for="dob">Date of Birth</label>
                    <input v-model="dateOfBirth" type="date">
                </div>
                <div>
                    <label for="sex">Sex</label>
                    <select v-model="sex" placeholder="Sex" name="sex">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label for="phoneNumber">Phone Number</label>
                    <input v-model="phoneNumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone Number">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input v-model="email" type="email" placeholder="Email">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input v-model="password" type="text" placeholder="Password">
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input v-model="confirmPassword" type="text" placeholder="Confirm Password">
                </div>

                <div>
                    <input type="checkbox" id="captcha">
                    <label for="captcha">Pretend I am a CAPTCHA</label>
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

export default {
    name: 'Register',
    data() {
        return {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            sex: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    },
    methods: {
        async submitForm() {
            if (this.firstName === "") {
                alert("First Name is required");
                return;
            }
            if (this.lastName === "") {
                alert("Last Name is required");
                return;
            }
            if (this.dateOfBirth === "") {
                alert("Date of Birth is required");
                return;
            }
            if (this.sex === "") {
                alert("Sex is required")
                return;
            }
            if (this.phoneNumber === "") {
                alert("Phone Number is required");
                return;
            }
            if (this.email === "") {
                alert("Email is required");
                return;
            }
            if (this.password === "") {
                alert("Password is required");
                return;
            }
            if (this.confirmPassword === "") {
                alert("Confirm Password is required");
                return;
            }
            if (this.password != this.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            const user = new UserModel(this.email, this.firstName, this.lastName, this.dateOfBirth, this.sex, this.phoneNumber);
            const userCreationResult = await createUser(user, this.password);
            if(userCreationResult.getIsSuccessful){
                const programs = await getPrograms();
                const program = programs[0];
                await updateUserAssignedProgram(user, );
                
                saveUserToSession(new UserModel(user.getEmail(), 0, program.getId(), user.getFirstName(), user.getLastName(), user.getDateOfBirth(), user.getSex(), user.getPhoneNumber()));
            } else {
                alert(userCreationResult.getMessage());
            }
        }
    }
}
</script>
