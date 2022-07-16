import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueLazyload from 'vue-lazyload'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(ElementUI)
Vue.use(router)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/assets/a.jpeg'
  // attempt: 1
})

new Vue({
  render: h => h(App),

  router
}).$mount('#app')
