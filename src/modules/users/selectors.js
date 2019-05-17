import { createSelector } from 'reselect'
import { getSorting } from '../../helpers'

export const getUsersByGroupAndOrder = createSelector(
	[state => state.users.items, state => state.users.filter, state => state.users.order],
	(users, filter, order) => {
		switch (filter) {
		    case "SHOW_ALL":
		      return users
		      	.slice()
		      	.sort(getSorting(order.type, order.field, order.field === 'createdAt' ? 'date' : 'string'))
		    case filter:
		      return users
		      	.filter(u => u.position === filter)
		      	.slice()
		      	.sort(getSorting(order.type, order.field, order.field === 'createdAt' ? 'date' : 'string'))
		    default:
		      return users
		      	.slice()
		      	.sort(getSorting(order.type, order.field, order.field === 'createdAt' ? 'date' : 'string'))
		}
	}
)