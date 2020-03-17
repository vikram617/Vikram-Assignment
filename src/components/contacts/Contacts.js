import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ContactsCathegory
  from './contactsCathegory/ContactsCathegory'

import { selectUser } from '../../actions/app.actions'
import { removeUser } from '../../actions/users.actions'

import styles from './Contacts.scss'


class Contacts extends Component {
  static propTypes = {
    cathegories:  PropTypes.object,
    selectUser:   PropTypes.func,
    removeUser:   PropTypes.func,
    editing:      PropTypes.bool,
    selectedUser: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render() {
    const {
      cathegories,
      selectUser,
      removeUser,
      selectedUser,
      editing
    } = this.props

    return (
      <div className={styles.contacts}>
        {
          Object.entries(cathegories)
            .sort(([ a ], [ b ]) => a > b ? 1 : -1)
            .map(([ cathegory, contacts ]) => (
              <ContactsCathegory
                key={cathegory}
                cathegory={cathegory}
                contacts={contacts}
                onUserClick={selectUser}
                removeUser={removeUser}
                selectedUser={selectedUser}
                editing={editing}
              />
            ))
        }
      </div>
    )
  }
}

const getInitial = ({ lastName }) => lastName[0].toUpperCase()

const mapStateToProps = state => {
  const { users: { byId } } = state
  const {
    app: {
      selected: selectedUser,
      editing
    }
  } = state
  const users = Object.values(byId)

  const cathegories = users.reduce(
    (acc, user) => {
      const cathegory = getInitial(user)

      return {
        ...acc,
        [cathegory]: [
          ...acc[cathegory] || [],
          user
        ]
      }
    },
    {}
  )

  return { cathegories, selectedUser, editing }
}

export default connect(
  mapStateToProps,
  { selectUser, removeUser }
)(Contacts)
