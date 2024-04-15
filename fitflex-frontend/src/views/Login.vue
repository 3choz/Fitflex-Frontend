<template>
  <div class="user-auth-page-container">
    <div>
      <img alt="Man Lifting" src="../assets/man-lifting.png">
    </div>
    
    <div class="login user-auth-input-box">
      <h2>Login</h2>
      <input type="text" placeholder="Username">
      <input type="text" placeholder="Password">
      
      <div>
        <label for="remember">Remember me</label>
        <input type="checkbox" id="remember" name="remember">
      </div>

      <router-link to="/forgot">I Forgot Username or Password</router-link>
      <button class="button-link">Log In</button>
    </div>
  </div>
</template>
  
<script>
import router from '@/router';

  export default {
    name: 'Login'
  }
</script>
