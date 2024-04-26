<template>
  <header>
    <div class="navContainer">
      <h1>FitFlex</h1>
    <nav>
      <ul>

    <li><a href="#"><router-link to="/">Home</router-link> </a></li>
    <li><a href="#"><router-link to="/programs">Programs</router-link></a> </li>
    <li><a href="#"><router-link to="/stats">Statistics</router-link></a> </li>
    <li><a href="#"><router-link to="/login">Login</router-link></a> </li>
    <li><a href="#"><router-link to="/profile">Profile</router-link> </a></li>
    <li><a href="#"><router-link to="/about">About</router-link></a> </li>
    <li><a href="#"><router-link to="/testapi">Test Api</router-link></a> </li>
  </ul>
    </nav>
    </div>
  </header>
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

<style>

.navContainer {
width: 80%;
margin: auto;
overflow: hidden;

}

header h1, nav ul {
display: inline-block;
vertical-align: middle;
}

header h1 {
float: left;
color: #000;
font-size: 24px;
}

.navContainer nav ul {
float: right;
list-style-type: none;
}

nav ul li {
float: left;
}

nav ul li a {
text-decoration: none;
color: #000;
padding: 0 15px;
display: block;
}

</style>