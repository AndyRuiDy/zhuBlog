import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createRouter from './router/router'
import createStore from './store/store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueBus from '@/utils/vueBus'
import animate from 'animate.css'

import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/global.styl'
import '@/assets/styles/iconfont.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueBus)
Vue.use(animate)
const router = createRouter()
const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
