import { UserModel } from '@/models/UserModel';
import { getUserFromSession } from '@/utils/session/SessionUtils';
import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    user: getUserFromSession(),
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    /**
     * Set the state of the signed in user
     * @param {*} state 
     * @param {UserModel} user 
     */
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    /**
     * Sign in the user
     * @param {*} context 
     * @param {UserModel} user 
     */
    userSignIn(context, user) {
      context.commit('setUser', user);
    },

    /**
     * Sign out the user
     * @param {*} context 
     */
    userSignOut(context) {
      context.commit('setUser', null);
    }
  },
  modules: {
  }
})
