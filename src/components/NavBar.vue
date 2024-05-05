<template>
  <header>
    <div class="navContainer">
      <h1>FitFlex</h1>
      <nav>
        <ul>
          <li><a href="#"><router-link to="/">Home</router-link> </a></li>
          <li><a href="#"><router-link to="/about">About</router-link></a> </li>
          <li><a href="#"><router-link to="/programs">Programs</router-link></a> </li>
          <li v-if="isSignedIn"><a href="#"><router-link to="/stats">Statistics</router-link></a> </li>
          
          
          <li v-if="isSignedIn"><a href="#"><router-link to="/profile">Profile</router-link></a></li>
          <!-- Why do we have these? 
          <li v-if="!isSignedIn"><a href="#"><router-link to="/login">Login</router-link></a></li>
          <li v-if="!isSignedIn"><a href="#"><router-link to="/register">Register</router-link></a></li>
          <li><a href="#"><router-link to="/testapi">Test Api</router-link></a> </li>-->
        </ul>
      </nav>
    </div>
    <div class="userContainer">
      <nav>
        <ul>
          <li v-if="isSignedIn" class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Hello, {{ name }} <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/profile">Profile</router-link></li>
              <li><a href="#" @click="signOut">Sign Out</a></li>
            </ul>
          </li>
          <li v-else>
            <a href="#"><router-link to="/login">Sign In</router-link></a>
          </li>
          <li v-else>
            <a href="#"><router-link to="/Register">Register</router-link></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  
  
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { removeUserFromSession } from '@/utils/session/SessionUtils';
import { mapGetters, mapActions } from 'vuex';
  
export default {
  name: 'NavBar',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(["user"]),
    isSignedIn() {
      return this.user !== null;
    },
    name() {
      return this.isSignedIn ? this.user.getFirstName() : "";
    }
  },
  methods: {
    ...mapActions(["userSignOut"]),
    signOut() {
      removeUserFromSession(this.userSignOut);
    }
  }
}
</script>

<style>

header {
  display: flex;
  justify-content: space-between;
}

.navContainer .userContainer {
  flex: 1;
}


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

.navContainer nav ul, .userContainer nav ul {
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

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-toggle:hover, .dropdown-toggle:focus {
  background-color: #3e8e41;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-menu a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

</style>