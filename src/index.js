import * as Gaspard from 'gaspard'

export default function (Vue, options = { globalNamespace: '$gaspard', instanceNamespace: '$g' }) {
  Vue[options.globalNamespace] = Gaspard
  Object.defineProperty(Vue.prototype, options.instanceNamespace, {
    get () {
      return new Gaspard.Collection(this.$el)
    }
  })
}
