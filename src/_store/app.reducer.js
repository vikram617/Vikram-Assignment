import { combineReducers } from 'redux'

import app from '../reducers/app.reducer'
import users from '../reducers/users.reducer'

export default combineReducers({
  app,
  users
})
