import Vue from 'vue'
import App from './App.vue'
import Ionic from '@ionic/vue'

Vue.use(Ionic)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
