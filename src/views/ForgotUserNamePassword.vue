<template>
  <div class="forgot user-auth-input-box">
    <h2>Forgot Username Or Password?</h2>
    <input type="text" placeholder="Email">

    <div>
      <br>
      <input type="checkbox" id="captcha">
      <label for="captcha">Pretend I am a CAPTCHA</label>
      <br> <br>
    </div>

    <button class="button-link">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'ForgotUserNamePassword'
}
</script>

<style>
.forgot {
  display: inline-block;
  width: 50%;
  margin-top: 5rem;
  padding: 20px;
}

.forgot input[type="text"],
.forgot button {
  width: 40%;
  padding: 10px;
  margin-bottom: 10px;
}
</style>