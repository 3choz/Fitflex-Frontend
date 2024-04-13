<template>
    <div class="user-auth-page-container">
        <div>
            <img alt="Man Lifting" src="../assets/man-lifting.png">
        </div>
        <div class="register user-auth-input-box">
            <h2>Sign Up Here</h2>

            <input type="text" placeholder="Username">
            <div>
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
            </div>
            <div>
                <label for="dob">Date of Birth</label>
                <input type="date">
            </div>
            <select placeholder="Sex">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>

            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Password">
            <input type="text" placeholder="Confirm Password">

            <div>
                <input type="checkbox" id="captcha">
                <label for="captcha">Pretend I am a CAPTCHA</label>
            </div>
            <button class="button-link">Sign Up</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
}
</script>
