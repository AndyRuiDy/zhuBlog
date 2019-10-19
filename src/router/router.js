import Router from 'vue-router'
import routes from './routers'

// 避免内存溢出
export default () => {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  })
}
