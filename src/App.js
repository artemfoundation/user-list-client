import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes'

export default () => (
	<BrowserRouter>
		{routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />)}
	</BrowserRouter>
)
