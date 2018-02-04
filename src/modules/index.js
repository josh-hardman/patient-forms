import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import form from './form'

export default combineReducers({
  routing: routerReducer,
  form
})
