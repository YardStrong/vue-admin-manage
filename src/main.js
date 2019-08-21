import 'bootstrap/dist/css/bootstrap.min.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'overlayscrollbars/js/jquery.overlayScrollbars.min.js'

import Vue from 'vue'
import App from './App.vue'
import MenuPanel from './components/MenuPanel.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
    render: h => h(MenuPanel)
}).$mount('#menuPanel')
