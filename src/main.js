import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import SlideUpDown from 'vue-slide-up-down';
import VueSlimScroll from 'vue-slimscroll'

window.$ = window.jQuery = require('jquery');
import { BootstrapVue} from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.use(VueSlimScroll);

Vue.component('slide-up-down', SlideUpDown);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
