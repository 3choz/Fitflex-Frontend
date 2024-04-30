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
import { isUserLoggedIn } from '@/utils/session/SessionUtils';

export default {
  name: 'Statistics',
  components: {
    FeedBack,
    CurrentProgress, 
  },
  beforeRouteEnter(to, from, next){
    if(isUserLoggedIn()){
      next();
    } else {
      next("/login");
    }
  }
}
</script>

<style>
#statistics{
  display: inline-block;
  text-align: center;
  margin: 50px;
}
</style>