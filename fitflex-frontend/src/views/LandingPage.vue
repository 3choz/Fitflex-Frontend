<template>
  
  <div class="home">
    <div>
      <img alt="Woman Stretching" src="../assets/girl-stretching.png">
      <p>We bring the tools you need to succeed</p>
      <!-- Add a 'Join Us Button' button  -->
      
      <p>Already have an account?</p>
      <!-- Add 'Login' Button -->

      <p>We provide the following:</p>

      <p>Free pre-approved workouts with difficulty levels. </p>
      <!-- Add workout icon -->
      <!-- Add checkmark icon -->
      <p>Progress monitoring to reflect your journey</p>
      <p>Opportunity to provide feedback to improve your experience.</p>
      <!-- Add message icon -->
      <!-- Add King Icon -->
      <p> Goal tracking and statistical summary</p>

    </div>
    
    Landing Page

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooterBelow from '@/components/FooterBelow.vue'

export default {
  name: 'LandingPage',
  components: {
    NavBar, 
    FooterBelow
  }
}
</script>

<style>
  p{
    /* color: red; */
    border: 1px solid black;
    border-radius: 5px;
    width: 500px;
    height: 30px;
  }
</style>