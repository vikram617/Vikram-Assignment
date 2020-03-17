
import reducer from './users.reducer'
import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '../actions/users.actions'

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(
        {
          byId:   {},
          allIds: []
        }
      )
  })

  const user1 = {
    id:        1,
    firstName: 'Evanne',
    lastName:  'Clifford',
    email:     'eclifford0@hhs.gov',
    phone:     '651-478-6538',
    address:   '5556 Mallard Place',
    note:      'Product Engineer'
  }

  const user2 = {
    id:        2,
    firstName: 'Doyle',
    lastName:  'Bunston',
    email:     'dbunston1@vimeo.com',
    phone:     '944-750-6585',
    address:   '462 Crownhardt Circle',
    note:      'Quality Engineer'
  }

  it('should handle ADD_USER', () => {
    expect(reducer(
      {
        byId:   {},
        allIds: []
      },
      {
        type:  ADD_USER,
        id:    1,
        value: user1
      }
    )).toEqual(
      {
        byId: {
          1: user1
        },
        allIds: [ 1 ]
      }
    )

    expect(reducer(
      {
        byId: {
          1: user1
        },
        allIds: [ 1 ]
      },
      {
        type:  ADD_USER,
        id:    2,
        value: user2
      }
    )).toEqual(
      {
        byId: {
          1: user1,
          2: user2
        },
        allIds: [ 1, 2 ]
      }
    )
  })

  it('should handle UPDATE_USER', () => {
    expect(reducer(
      {
        byId: {
          1: user1,
          2: {
            id:        2,
            firstName: 'Karlos',
            lastName:  'Maras'
          }
        },
        allIds: [ 1, 2 ]
      },
      {
        type:  UPDATE_USER,
        value: {
          firstName: 'Carl',
          lastName:  'Markos'
        },
        id: 2
      }
    )).toEqual(
      {
        byId: {
          1: user1,
          2: {
            id:        2,
            firstName: 'Carl',
            lastName:  'Markos'
          }
        },
        allIds: [ 1, 2 ]
      }
    )
  })

  it('should handle REMOVE_USER', () => {
    expect(reducer(
      {
        byId: {
          1: user1,
          2: user2
        },
        allIds: [ 1, 2 ]
      },
      {
        type:  REMOVE_USER,
        value: 1
      }
    )).toEqual(
      {
        byId: {
          2: user2
        },
        allIds: [ 2 ]
      }
    )

    expect(reducer(
      {
        byId: {
          2: user2
        },
        allIds: [ 2 ]
      },
      {
        type:  REMOVE_USER,
        value: 2
      }
    )).toEqual(
      {
        byId:   {},
        allIds: []
      }
    )
  })
})
