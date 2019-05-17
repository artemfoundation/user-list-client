import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownWardIcon from '@material-ui/icons/ArrowDownward'

const styles = theme => ({
	sort: {
		marginLeft: theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 2,
		cursor: 'default',
		userSelect: 'none'
	},
	arrow: {
		fontSize: 14,
		lineHeight: 20
	}
})

class UsersActionPanel extends React.PureComponent {
	constructor() {
		super()
	}

	changeGroupFilter = event => {
	    this.props.changeGroupFilter(event.target.value)
	}

	changeSort = (field, type) => {
	    this.props.changeSort({
	    	field,
	    	type
	    })
	}

	render() {
		const { filter, order, sortFields, positions, putUser, classes } = this.props

		return (
		<React.Fragment>
			<Toolbar variant="dense">
				<FormControl>
		  		     <InputLabel htmlFor="filter">Показать</InputLabel>
		  		    	<Select
		  		    	  value={filter}
		  		    	  onChange={this.changeGroupFilter}
		  		    	  input={<Input name="filter" id="filter" />}
		  		    	>
		  		    		{[{value: 'SHOW_ALL', label: 'Все'}, ...positions].map(position => <MenuItem value={position.value} key={position.value}>{position.label}</MenuItem>)}
		  		    	</Select>
		  		</FormControl>
		  	</Toolbar>  
	        <Toolbar variant="dense">
	        	{sortFields.map(field => (
	        	  <Typography
	        	  	color="inherit"
	        	  	noWrap
	        	  	key={field.value}
	        	  	className={classes.sort}
	        	  	onClick={() => this.changeSort(field.value, (field.value == order.field ? (order.type === 'asc' ? 'desc' : 'asc') : (order.type)))}
	        	  >
	        	  	{field.value === order.field ? (order.type === 'asc' ? <ArrowDownWardIcon className={classes.arrow}/> : <ArrowUpwardIcon className={classes.arrow}/>) : null}
	        	    {field.label}
	        	  </Typography>
	        	))}
	        </Toolbar>
		</React.Fragment>
		)
	}
}

export default withStyles(styles)(UsersActionPanel)