<!-- TODO:
  * Get the icons from the mockup and add them to their sections
  * Adjust the styling of the text boxes to match the mockup
 -->
<template>
  <section class="hero">

    <div class="landing-header">
      <div>
        <p>We Bring The Tools you need to succeed.</p>
        <router-link to="/register" class="button-link">
          Join Us
        </router-link>
      </div>

      <div>
        <p>Already have an account?</p>
        <router-link to="/login" class="button-link">
          Login
        </router-link>
      </div>

      <div>
        <p></p>
        <!-- Will only be visible in the logged in state -->
        <router-link to="/programsignup" class="button-link">
          Start Your Journey
        </router-link>
      </div>
    </div>
  </section>

  <section class="boxy-area">
    <h2>We provide the following:</h2>
    <div class="boxy-containe">
      <div class="boxy light-red">
        <p>Free pre-approved workouts with different difficulty levels.</p> &nbsp; &nbsp;  &nbsp;  <span><img
            src="../assets/icon1.png" class="small-icon1" alt=""></span>
      </div>

      <div class="boxy light-orange">
        <p>  <span><img src="../assets/icon2.png" class="small-icon2" alt=""></span> &nbsp; &nbsp;  &nbsp; Weight tracking to see your progress.</p>
      </div>

      <div class="boxy light-yellow">
        <p>Opportunity to provide feedback to help improve your experience.  &nbsp; &nbsp;  &nbsp;<span><img
              src="../assets/icon3.png" class="small-icon3" alt=""></span> </p>
      </div>

      <div class="boxy light-green">
        <p> <span><img src="../assets/icon4.png" class="small-icon4" alt=""></span> &nbsp; &nbsp;  &nbsp;We help track your goals and give
          way to what you've done.</p>
      </div>
    </div>
  </section>
  <br><br><br> <br><br>
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
.landing-header {
  background-image: url("../assets/girl-stretching.png");
  background-size: cover;
  padding: 100px 30px;
  text-align: right;
  clear: both;
}

.landing-header div p {
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.boxy {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 60%;
  margin: 10px;
  border-radius: 10px;
}

.boxy-area{
  margin-top: 20px;
}

.light-red {
  background-color: #feb9b9;
  margin-right: 8%;
}

.light-orange {
  background-color: #ffca8b;
  margin-left: 8%;
}

.light-yellow {
  background-color: #ffe193;
  margin-right: 8%;
}

.light-green {
  background-color: #eeff86;
  margin-left: 8%;
}

.small-icon1 {
  height: 42px;
  width: 58px;
}

.small-icon2 {
  height: 26px;
  width: 31px;
}

.small-icon3 {
  height: 42px;
  width: 58px;
}

.small-icon4 {
  height: 42px;
  width: 58px;
}
</style>