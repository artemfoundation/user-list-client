import { combineReducers } from 'redux'
import {
  REQUEST_USERS,
  RECEIVE_USERS,
  PUT_USER_REQUESTED,
  PUT_USER_SUCCEEDED,
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCEEDED,
  CHANGE_GROUP_FILTER,
  CHANGE_SORT
} from './actions'

const users = (state = {
	order: {
		field: 'createdAt',
		type: 'asc',
	},
	filter: 'SHOW_ALL',
	isFetching: false,
	items: []
}, action) => {
	switch (action.type) {
	    case REQUEST_USERS:
	    	return Object.assign({}, state, {
	    	  	isFetching: true
	    	})
	    case RECEIVE_USERS:
	    	return Object.assign({}, state, {
	    	  	isFetching: false,
	    	  	items: action.users.data
	    	})
	    case PUT_USER_SUCCEEDED:
	    	return Object.assign({}, state, {
	    	  	items: [action.user, ...state.items]
	    	})
	    case DELETE_USER_SUCCEEDED:
	    	return Object.assign({}, state, {
	    	  	items: state.items.filter(item => item._id === action._id ? false : true)
	    	})
	    case CHANGE_GROUP_FILTER:
	    	return Object.assign({}, state, {
	    	  	filter: action.filter
	    	})
	    case CHANGE_SORT:
	    	return Object.assign({}, state, {
	    	  	order: {...state.order, ...action.order}
	    	})
	    default:
	     	return state
	 }
}

export default users