<template>
  <br>
    <div class="profile" id="profile">
      <form>
        <!-- Add image component -->
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
  </template>
  
  <script>
  
  export default {
    name: 'Profile'
  }
  </script>
  