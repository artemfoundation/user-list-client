import React from 'react'
import Grid from '@material-ui/core/Grid'

export default ({component: Component}) => (
	<Grid
	  container
	  direction="row"
	  justify="center"
	  className="baseLayoutGrid"
	>
		<Component/>
	</Grid>
)