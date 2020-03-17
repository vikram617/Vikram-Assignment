import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '../actions/users.actions'

const defaultState = {
  byId:   {},
  allIds: []
}


export default function users(state = defaultState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { id, value } = action
      const { byId, allIds } = state

      return {
        ...state,
        byId:   { ...byId, [id]: value },
        allIds: [ ...allIds, id ]
      }
    }

    case UPDATE_USER: {
      const { id, value } = action
      const { byId } = state

      return {
        ...state,
        byId: {
          ...byId,
          [id]: {
            id,
            ...value
          }
        }
      }
    }

    case REMOVE_USER: {
      const { value: id } = action
      const { [id]: userToRemove, ...remainingUsers } = state.byId
      const remainingIds = state.allIds.filter(currentId => currentId !== id)

      return {
        ...state,
        byId:   remainingUsers,
        allIds: remainingIds
      }
    }

    default:
      return state
  }
}
