<template>
  <div class="update-profile">
    <div v-if="!editUser" class="register update-profile user-auth-input-box">
      <h2>Your Information</h2>
      <div>
        <p>Email: {{ user.getEmail() }}</p>
        <p>First Name: {{ user.getFirstName() }}</p>
        <p>Last Name: {{ user.getLastName() }}</p>
        <p>Date of Birth: {{ user.getDateOfBirth() }}</p>
        <p>Sex: {{ user.getSex() }}</p>
        <p>Phone Number: {{ user.getPhoneNumber() }}</p>
        <p v-if="assignedProgram !== null">Assigned Program: {{ assignedProgram.getName() }} </p>
      </div>
      <button class="button-link" @click="editUser = true">Edit</button>
      <router-link to="/profile/updatepassword" class="button-link">Change Password</router-link>
    </div>
    <div v-else class="register update-profile user-auth-input-box">
      <h2>Edit your information</h2>
      <form @submit.prevent="updateUserInformation">
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
          <input v-model="phoneNumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number">
        </div>
        <br>
        <button class="button-link" type="submit">Save Changes</button>
        <button class="button-link" @click="editUser = false">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getUserAssignedProgram } from '@/utils/api/ProgramsApiUtil';
import { updateUser } from '@/utils/api/UserApiUtil';
import { getUserFromSession, isUserLoggedIn, saveUserToSession } from '@/utils/session/SessionUtils';
import { mapActions } from 'vuex';

export default {
  name: 'UserProfile',
  data() {
    return {
      user: isUserLoggedIn() ? getUserFromSession() : null,
      assignedProgram: null,
      editUser: false,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      sex: "",
      phoneNumber: ""
    }
  },
  beforeRouteEnter(to, from, next){
    if(!isUserLoggedIn()){
      next('/login');
    } else {
      next();
    }
  },
  async mounted(){
    this.assignedProgram = await getUserAssignedProgram(this.user);
  },
  methods: {
    ...mapActions(['userSignIn']),
    async updateUserInformation() {
      if(this.firstName !== ""){
        this.user.setFirstName(this.firstName);
      }

      if(this.lastName !== ""){
        this.user.setLastName(this.lastName);
      }

      if(this.dateOfBirth !== ""){
        this.user.setDateOfBirth(this.dateOfBirth);
      }

      if(this.sex !== ""){
        this.user.setSex(this.sex);
      }

      if(this.phoneNumber !== ""){
        this.user.setPhoneNumber(this.phoneNumber);
      }

      const updateUserResponse = await updateUser(this.user);
      if(!updateUserResponse.getIsSuccessful()){
        const errorMessage = `Error updating user: ${updateUserResponse.getErrorMessage()}`;
        console.log(errorMessage);
        alert(errorMessage);
        return;
      }

      console.log(updateUserResponse.toString());
      saveUserToSession(this.user, this.userSignIn, "/profile");
      this.editUser = false;
    },
  }
};
</script>
