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
        <button class="button-link" type="submit">Log In</button>
      </form>
      <img alt="Man Lifting" src="../assets/man-lifting.png">
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { loginUser, getUser } from '@/ApiUtils.js';
import { ResponseResultDTO } from '@/models/ResponseResultDTO.js';
import { UserModel } from '@/models/UserModel';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      userModel: null
    }
  },
  methods: {
    async submitForm() {
      // console.log(`Username: ${this.username}, Password: ${this.password}`)
      if (this.username && this.password) {
        const result = await loginUser(this.username, this.password)
        console.log(`Was successful: ${result.getIsSuccessful()}, Message: ${result.getErrorMessage()}`)

        if(result.getIsSuccessful()){
          this.userModel = await getUser(this.username);
          console.log(this.userModel.toString());
        }
      }
    }
  }
}
</script>
