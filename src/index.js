import * as Gaspard from 'gaspard'

function VueGaspard (Vue, options = { globalNamespace: '$gaspard', instanceNamespace: '$g' }) {
  Vue[options.globalNamespace] = Gaspard
  Object.defineProperty(Vue.prototype, options.instanceNamespace, {
    get () {
      return new Gaspard.Collection(this.$el)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGaspard)
}

export default VueGaspard
