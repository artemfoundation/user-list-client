const modules = [{
	path: '/',
	name: 'main',
	layout: 'MainLayout',
	params: {
		exact: true
	}
}, {
	path: '/users',
	name: 'users',
	layout: 'BaseLayout',
	params: {}
}]

const moduleFactory = ({ name, params, layout, store, path }) => {
	const module = require(`./${name}`)
	const layoutWrapper = require(`../components/layouts/${layout}`)
 	const component = require(`./${name}/components`).default

	// Приаттачим редьюсеры в стор из модулей, если они есть
  	if (void 0 !== module.reducer) {
  	  store.attachReducers({ [name]: module.reducer})
  	}
	
  	return {
  		path,
  		component: () => { return layoutWrapper.default({component}) },
  		...params
  	}
}

export { modules, moduleFactory }