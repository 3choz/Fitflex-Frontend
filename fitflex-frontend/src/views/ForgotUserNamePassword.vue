<template>
    <div class="forgot user-auth-input-box">
      <h2>Forgot Username Or Password?</h2>
      <input type="text" placeholder="Email">

      <div>
        <input type="checkbox" id="captcha">
        <label for="captcha">Pretend I am a CAPTCHA</label>
      </div>

      <button class="button-link">Submit</button>
    </div>
</template>

<script>
export default {
  name: 'ForgotUserNamePassword'
}
</script>