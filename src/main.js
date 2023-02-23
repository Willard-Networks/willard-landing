import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './scss/config.scss'
import VueLazyLoadVideo from 'vue-lazyload-video'

Vue.config.productionTip = false
Vue.use(VueLazyLoadVideo)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
