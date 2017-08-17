import Vue from 'vue'
import App from './App'
import VueGaspard from 'plugin'

Vue.config.productionTip = false

Vue.use(VueGaspard, {
  globalNamespace: '$gaspard',
  instanceNamespace: '$g'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
