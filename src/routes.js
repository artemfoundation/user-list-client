import store from './store'
import { moduleFactory, modules } from './modules'

let routes = []

for (let module of modules) {
  routes.push(moduleFactory({ ...module, store }))
}

export default routes