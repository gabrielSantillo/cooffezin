import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueScrollReveal from 'vue-scroll-reveal'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(vueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 2500,
  scale: 1,
  distance: '60px',
  mobile: false
});
