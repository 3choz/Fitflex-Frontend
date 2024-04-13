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

      <p>I forgot my Username or Password</p>
      <button class="button-link">Log In</button>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'Login'
  }
</script>

<style>

</style>
