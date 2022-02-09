import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'

import store from '@/store'
import router from '@/router'

Vue.use(Router);

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  created() {
    this.$store.commit('setMediaPoint');

    console.info(`
    Start App
    ==========================
    Media port : ${this.$store.getters.isMobile ? 'mobile' : 'pc'}
    Client Info : ${window.clientInformation.userAgent}
    ==========================
    `);
  }
}).$mount('#app')
