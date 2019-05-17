import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { combineReducers, applyMiddleware } from 'redux'
import { createStore } from 'redux-dynamic-reducer'


const store = (state, action) => {  
  return {}
}

export default createStore(
	store,
	applyMiddleware(thunkMiddleware/*, logger*/)
)

