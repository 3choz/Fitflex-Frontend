<!-- TODO:
  * Get the icons from the mockup and add them to their sections
  * Adjust the styling of the text boxes to match the mockup
 -->
 <template>
  <div class="home">

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
    </div>
    
    <strong>We provide the following.</strong>

    <div class="boxy light-red">
      <p>We provide free pre-approved workouts with different difficulty levels.</p>
    </div>

    <div class="boxy light-orange">
      <p>We provide your progress to see how far you went.</p>
    </div>

    <div class="boxy light-yellow">
      <p>We give the user opportunity to give feedback to help improve your experience.</p>
    </div>

    <div class="boxy light-green">
      <p>We help track your goals and give way to what you've done.</p>
    </div>

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
.landing-header{
  height: 500px;
  width: 1360px;
  text-align: right;
  background-image: url("../assets/girl-stretching.png");
  background-size: cover;
  background-position: center center;
}

.landing-header div p{
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.boxy{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50%;
  margin: 10px;
}

.light-red{
  background-color: #feb9b9;
}

.light-orange{
  background-color: #ffca8b;
}

.light-yellow{
  background-color: #ffe193;
}

.light-green{
  background-color: #eeff86;
}
</style>