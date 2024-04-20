<template>
    <div id="statistics" class="statistics">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

        <FeedBack />
        <CurrentProgress />
    </div>
  </template>
  

  
  <script>
// @ is an alias to /src
import FeedBack from '@/components/Feedback.vue'
import CurrentProgress from '@/components/CurrentProgress.vue'

export default {
  name: 'Statistics',
  components: {
    FeedBack,
    CurrentProgress, 
  }
}
</script>