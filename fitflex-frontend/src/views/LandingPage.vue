<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
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
