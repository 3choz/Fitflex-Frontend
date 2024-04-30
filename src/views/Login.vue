<template>
  <div class="user-auth-page-container">
    
    <div class="login user-auth-input-box">
      <h2>Login</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Username</label>
          <input v-model="username" type="text" placeholder="Username">
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" type="password" placeholder="Password">
        </div>
        
        <div>
          <label for="remember">Remember me</label>
          <input type="checkbox" id="remember" name="remember">
        </div>
      
        <router-link to="/forgot">I Forgot Username or Password</router-link>
        <br>
        <router-link to="/register">Don't Have An Accoun't? Join Us!</router-link>
        <button class="button-link" type="submit">Log In</button>
      </form>
      <img alt="Man Lifting" src="../assets/man-lifting.png">
    </div>
  </div>
</template>

<script>
import { loginUser, getUser } from "@/utils/api/UserApiUtil";
import { saveUserToSession } from '@/utils/session/SessionUtils';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['userSignIn']),
    async submitForm() {
      if (this.username && this.password) {
        const loginResponse = await loginUser(this.username, this.password)
        console.log("Login Response", loginResponse.toString(), loginResponse)

        if(loginResponse.getIsSuccessful()){
          const userModel = await getUser(this.username);
          console.log(userModel.toString());

          saveUserToSession(userModel, this.userSignIn);
        }
      }
    }
  }
}
</script>
