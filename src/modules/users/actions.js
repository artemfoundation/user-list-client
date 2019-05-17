import apiClient from '../../services/api-client'


// Users actions
export const REQUEST_USERS = 'REQUEST_USERS'

export const requestUsers = () => {
  return {
    type: REQUEST_USERS
  }
}

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const PUT_USER_REQUESTED = 'PUT_USER_REQUESTED'

export const putUserRequested = () => {
  return {
    type: PUT_USER_REQUESTED
  }
}

export const PUT_USER_SUCCEEDED = 'PUT_USER_SUCCEEDED'

export const putUserSucceeded = (user) => {
  return {
    type: PUT_USER_SUCCEEDED,
    user
  }
}

export const DELETE_USER_REQUESTED = 'DELETE_USER_REQUESTED'

export const deleteUserRequested = () => {
  return {
    type: DELETE_USER_REQUESTED
  }
}

export const DELETE_USER_SUCCEEDED = 'DELETE_USER_SUCCEEDED'

export const deleteUserSucceeded = (_id) => {
  return {
    type: DELETE_USER_SUCCEEDED,
    _id
  }
}

export const fetchUsers = () => {
  return dispatch => {
    dispatch(requestUsers())
    return apiClient.get('/api/getUsers')
      .then(({data}) => data)
      .then(users => dispatch(receiveUsers(users)))
  }
}

export const putUser = (user) => {
  return dispatch => {
    dispatch(putUserRequested())
    return apiClient.post('/api/putUser', user)
      .then((user) => dispatch(putUserSucceeded(user.data.data)))
  }
}

export const deleteUser = (_id) => {
  return dispatch => {
    dispatch(deleteUserRequested())
    return apiClient.delete('/api/deleteUser', {
      data: { _id }
    })
      .then(() => dispatch(deleteUserSucceeded(_id)))
  }
}

// View actions
export const CHANGE_GROUP_FILTER = 'CHANGE_GROUP_FILTER'

export const changeGroupFilter = (filter) => {
  return {
    type: CHANGE_GROUP_FILTER,
    filter
  }
}

export const CHANGE_SORT = 'CHANGE_SORT'

export const changeSort = (order) => {
  return {
    type: CHANGE_SORT,
    order
  }
}


