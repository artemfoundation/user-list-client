import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { fetchUsers, putUser, deleteUser, changeGroupFilter, changeSort } from "../actions"
import { getUsersByGroupAndOrder } from '../selectors'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import UsersActionPanel from './UsersActionPanel'
import AddUserButton from './AddUserButton'
import User from './User'

const styles = theme => ({
  mainContent: {
  	width: '100%',
  	height: '100%',
	margin: '0 auto',
	textAlign: 'center',
	paddingLeft: theme.spacing.unit * 2,
	paddingRight: theme.spacing.unit * 2
  },
  listContent: {
  	marginBottom: theme.spacing.unit * 2
  },
  emptyContent: {
  	height: '100%'
  },
  header: {
  	margin: theme.spacing.unit * 2
  },
  content: {
  	width: '100%'
  },
  fab: {
  	margin: theme.spacing.unit
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
})

// Для фильтрации и добавления пользователей
const positions = [
  {
    value: 'developer',
    label: 'Отдел разработки',
  },
  {
    value: 'lead',
    label: 'Руководство',
  },
  {
    value: 'booker',
    label: 'Бухгалтерия',
  },
  {
    value: 'another',
    label: 'Прочий персонал',
  }
]

// Для сортировки пользователей
const sortFields = [
  {
    value: 'createdAt',
    label: 'Дата создания',
  },
  {
    value: 'lastname',
    label: 'Фамилия',
  },
  {
    value: 'firstname',
    label: 'Имя',
  }
]

class UserList extends React.Component {
	constructor() {
		super()
	}

	componentWillMount() {
		this.props.fetchUsers()
	}

	deleteUser = (_id, e) => {
		this.props.deleteUser(_id)
	}

	putUser = (user, e) => {
		this.props.putUser(user)
	}

	render() {
		const {
			classes,
			users,
			filteredUsers,
			isFetching,
			filter,
			changeGroupFilter,
			changeSort,
			order,
			t
		} = this.props

		return (
			<Grid item className={classes.content}>
		  		<Grid
				  container
				  direction={isFetching ? "column" : "row"}
				  justify={isFetching ? "flex-start" : "center"}
				  alignItems="center"
				  className={classes.mainContent}
				>
					<Grid item className={classes.header}>
				  		<Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>Список пользователей</Typography>
				  		<AddUserButton
				  			positions={positions}
				  			putUser={this.putUser}
				  			classes={classes}
				  		/>
				  	</Grid>
				  	<Grid item className={classes.content}>
				  		{ isFetching ? (
				  			<CircularProgress />
				  			) : users.length ? (
				  			<Grid
							  container
							  direction="column"
							  justify="center"
							  alignItems="center"
							  className={classes.listContent}
							>
								<UsersActionPanel
									filter={filter}
									order={order}
									sortFields={sortFields}
									positions={positions}
									changeSort={changeSort}
									changeGroupFilter={changeGroupFilter}
								/>
						        { filteredUsers.length ? (
						        	<List className={classes.list}>
								  		{ filteredUsers.map((user) => {
								  			return <User key={user._id} user={user} deleteUser={this.deleteUser}/>
								  		})}
					  				</List>
					  				) : (<Typography variant="h6" align="center" color="textSecondary" paragraph>{t('users.notFound')}</Typography>)
						    	}
					  			
							</Grid>
				  			) : (
				  			<Grid
							  container
							  direction="column"
							  justify="center"
							  alignItems="center"
							  className={classes.emptyContent}
							>
					  			<Typography variant="h6" align="center" color="textSecondary" paragraph>{t('users.notFound')}</Typography>
					  		</Grid>
				  		)}
					</Grid>
		  		</Grid>
			</Grid>
		)
	}
}


const mapStateToProps = (state) => {
	const { users } = state
	const { isFetching, filter, order, items } = users

	return {
		filteredUsers: getUsersByGroupAndOrder(state),
		users: items,
		isFetching,
		filter,
		order
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	    dispatch,
	    ...bindActionCreators({ fetchUsers, putUser, deleteUser, changeGroupFilter, changeSort }, dispatch)
	 }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles)(UserList)))