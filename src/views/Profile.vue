<!-- <template>
  <br>
    <div class="profile" id="profile">
      <form>
        <p>Buffed_Duck</p>
        <p>Username: <input type="text" required v-model="itemName"></p>
        <p>First Name: <input type="text" v-model="itemNumber"></p>
        <p>Last Name: <input type="text" v-model="itemNumber"></p>
        <p>Email: <input type="text" v-model="itemNumber"></p>
        <p>Phone Number: <input type="text" v-model="itemNumber"></p>
        <p>Date of Birth: <input type="text" v-model="itemNumber"></p>
        <p>Password: <input type="password" v-model="itemNumber"></p>
        
        <button type="submit">Save Changes</button>
      </form>
      <br>
      <button type="submit" class="blue-button">Delete Account</button>

    </div>
  </template> -->

<!-- -- -->

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
      <div v-if="!changePassword">
        <h2>Edit your information</h2>
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
            <input v-model="phoneNumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number">
          </div>
          <br>
          <button class="button-link" type="submit">Save Changes</button>
          <button class="button-link" @click="editUser = false">Cancel</button>
        </form>
      </div>
      <div v-else>
        <h2>Change {{ user.getFirstName() }}'s Password</h2>
        <form @submit="updatePassword">
          <div>
            <label for="currentPassword">Current Password</label>
            <input v-model="currentPassword" type="text" placeholder="Password" required>
          </div>
          <div>
            <label for="newPassword">New Password</label>
            <input v-model="newPassword" type="text" placeholder="Password" required>
          </div>
          <div>
            <label for="confirmNewPassword">Confirm New Password</label>
            <input v-model="confirmNewPassword" type="text" placeholder="Confirm Password" required>
          </div>
          <br>
          <button class="button-link" type="submit">Update Password</button>
          <button class="button-link" @click="editUser = false; changePassword = false">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserAssignedProgram } from '@/utils/api/ProgramsApiUtil';
import { getUserFromSession, isUserLoggedIn } from '@/utils/session/SessionUtils';

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
      phoneNumber: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
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
    async updateUserInformation() {
      console.log("Updated user information");
    },
  }
};
</script>
