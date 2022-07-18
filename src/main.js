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
import './utils/filter_utils.js'
import store from './store'


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

// router.beforeEach((to, from, next) =>{
//   const username = store.state.user.username
//   console.log('用户名:'+ username)
//   console.log(to.name)
//   if( username== '' && to.name == "manage"){
//     console.log('用户名空')
//     return next({name:'login'})

//   }
//   return next()
// })

new Vue({
  render: h => h(App),

  router,
  store
}).$mount('#app')
