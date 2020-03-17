import { action } from '../helpers/actionFactory'

export const ADD_NEW_USER = 'ADD_NEW_USER'
export const EDIT_USER = 'EDIT_USER'
export const SELECT_USER = 'SELECT_USER'
export const addNewUser = action(ADD_NEW_USER)
export const editUser = action(EDIT_USER)
export const selectUser = action(SELECT_USER)
