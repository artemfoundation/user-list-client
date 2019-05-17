import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export default class User extends React.PureComponent {
	constructor() {
		super()
	}

	render() {
		const { user, deleteUser } = this.props

		return (
			<ListItem>
				<Avatar>{user.firstname[0] + user.lastname[0]}</Avatar>
				<ListItemText
					primary={user.firstname + ' ' + user.lastname}
					secondary={user.position ? user.position : 'нет данных'}>
				</ListItemText>
				<ListItemSecondaryAction>
                  <IconButton aria-label="Delete" onClick={(e) => deleteUser(user._id, e)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
			</ListItem>
		)
	}
}