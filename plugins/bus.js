import Vue from 'vue'

const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$EventBus = new Vue()
}

Vue.use(eventBus)