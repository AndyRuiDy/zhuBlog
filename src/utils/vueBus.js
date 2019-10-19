import Bus from 'vue'

let install = (Vue) => {
  Vue.prototype.$bus = new Bus()
}

export default { install }
