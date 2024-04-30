<template>
    <div class="update-profile">
        <div class="register update-profile user-auth-input-box">
            <h2>Change {{ user.getFirstName() }}'s Password</h2>
            <form @submit.prevent="updatePassword">
            <div>
                <label for="currentPassword">Current Password</label>
                <input v-model="currentPassword" type="password" placeholder="Current Password" required>
            </div>
            <div>
                <label for="newPassword">New Password</label>
                <input v-model="newPassword" type="password" placeholder="New Password" required>
            </div>
            <div>
                <label for="confirmNewPassword">Confirm New Password</label>
                <input v-model="confirmNewPassword" type="password" placeholder="Confirm New Password" required>
            </div>
            <br>
            <button class="button-link" type="submit">Update Password</button>
            <button class="button-link" @click="editUser = false; changePassword = false">Cancel</button>
            </form>
        </div>
    </div>
</template>

<script>
import { getUserFromSession, isUserLoggedIn } from '@/utils/session/SessionUtils';
import { updateUserPassword } from '@/utils/api/UserApiUtil';
import router from '@/router';

export default {
  name: 'UpdateUserPassword',
  data() {
    return {
      user: isUserLoggedIn() ? getUserFromSession() : null,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    }
  },
  beforeRouteEnter(to, from, next){
    if(isUserLoggedIn()){
      next();
    } else {
      next('/login');
    }
  },
  methods: {
    async updatePassword(){
        if(this.currentPassword === this.newPassword || this.currentPassword === this.confirmNewPassword){
            alert("New password cannot be the same as the current password");
            return;
        }
        
        if(this.newPassword !== this.confirmNewPassword){
            alert("New Passwords do not match");
            return;
        }

        const updatedUserResponse = await updateUserPassword(this.user, this.currentPassword, this.newPassword);
        if(updatedUserResponse.getIsSuccessful()){
          alert("Password updated successfully");
          router.push('/profile');
        } else {
          const message = `Error While Updating: ${updatedUserResponse.toString()}`;
          alert(message);
          console.log(message);
          return;
        }
    }
  }
}
</script>

<style></style>