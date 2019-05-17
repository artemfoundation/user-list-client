import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AddUserDialog from './AddUserDialog'

export default class AddUserButton extends React.PureComponent {
	constructor() {
		super()

		this.state = {
			isDialogOpen: false
		}
	}

	tooglePutUserDialog = value => {
		this.setState({
			isDialogOpen: value
		})
	}

	render() {
		const {positions, putUser, classes} = this.props

		return (
			<React.Fragment>
				<Fab color="primary" aria-label="Add" className={classes.fab} onClick={(e) => this.tooglePutUserDialog(true)}>
	  		    	<AddIcon />
	  		    </Fab>
	  		    {this.state.isDialogOpen ? (<AddUserDialog
	  		    	open={this.state.isDialogOpen}
	  		    	positions={positions}
	  		    	onClose={() => this.tooglePutUserDialog(false)}
	  		    	onButtonClick={(user) => putUser(user)}
	  		    />) : null}
  		    </React.Fragment>
		)
	}
}