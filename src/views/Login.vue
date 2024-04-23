<template>
  <div class="user-auth-page-container">
    <div class="signup-image login-image">
      <!-- <img alt="Man Lifting" src="../assets/man-lifting.png"> -->
    </div>

    <div class="login user-auth-input-box">
      <h2>Login</h2>
      <input type="text" placeholder="Username">
      <input type="text" placeholder="Password">

      <div>
        <label for="remember">Remember me</label>
        <input type="checkbox" id="remember" name="remember">
      </div>

      <button class="button-link">Log In</button>

      Don't have an account?
      <router-link to="/register">
        Click Here to Sign Up
      </router-link>

      <p><router-link to="/forgot">I Forgot Username or Password</router-link></p>

      <div>
      <img alt="Man Lifting" src="../assets/man-lifting.png">
    </div>

    <!-- <div class="login user-auth-input-box">
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
      </form> -->
      

    </div>

  </div>
</template>

<script>
import router from '@/router';
import { loginUser } from '@/ApiUtils.js';
import { ResponseResultDTO } from '@/models/ResponseResultDTO.js';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submitForm() {
      if (this.username && this.password) {
        const result = await loginUser(this.username, this.password)
        console.log(result.getIsSuccessful())
        console.log(result.getErrorMessage())
      }
    }
  }
}
</script>
