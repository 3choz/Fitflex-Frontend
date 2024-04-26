import "./assets/styles.css"
import "./assets/footer.css"
import "./assets/profile.css"
import "./assets/programSignup.css"
import "./assets/statistics.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
