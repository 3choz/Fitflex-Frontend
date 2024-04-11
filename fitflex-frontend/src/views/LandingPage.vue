<template>
  <div class="home">
    <div>
      <img alt="Woman Stretching" src="../assets/girl-stretching.png">
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
