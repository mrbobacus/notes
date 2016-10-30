import Vue from 'vue'
import App from './App'
import '../src/assets/bootstrap/css/bootstrap.min.css'
require('offline-plugin/runtime').install()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
