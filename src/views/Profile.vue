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
    <div class="register update-profile user-auth-input-box">
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
        <div>
          <label for="email">Email</label>
          <input v-model="email" type="email" placeholder="Email">
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" type="text" placeholder="Password">
        </div>
        <div>
          <label for="confirmPassword">Confirm Password</label>
          <input v-model="confirmPassword" type="text" placeholder="Confirm Password">
        </div>
        <br>
        <button class="button-link" type="submit">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  // Add your Vue data, methods, etc. here
};
</script>


<style>
.update-profile {
  display: inline-block;
  text-align: center;
  width: 30rem;
  margin-bottom: 80px;
}
</style>
