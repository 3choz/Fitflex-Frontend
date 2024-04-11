<template>
    <div >
    FitFlex |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/programs">Programs</router-link> |
    <router-link to="/stats">Statistics</router-link> |
    <router-link to="/login">Login</router-link> 
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'NavBar',
    components: {
      HelloWorld
    }
  }
  </script>