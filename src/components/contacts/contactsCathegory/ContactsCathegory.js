import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import TitledSegment
  from '../../PCs/titledSegment/TitledSegment'
import List from '../../PCs/list/List'
import ListItem from '../../PCs/listItem/ListItem'
import RemoveButton
  from '../../PCs/buttons/removeButton/RemoveButton'

import styles from './ContactsCathegory.scss'


export default class ContactsCathegory extends PureComponent {
  static propTypes = {
    cathegory:    PropTypes.string.isRequired,
    contacts:     PropTypes.array.isRequired,
    onUserClick:  PropTypes.func.isRequired,
    removeUser:   PropTypes.func,
    editing:      PropTypes.bool,
    selectedUser: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  createRemoveButton = ({ id }) => {
    const { removeUser, selectedUser, editing } = this.props
    if (selectedUser !== id || !editing) return null

    return (
      <span className={styles.remove}>
        <RemoveButton
          onClick={() => removeUser(id)}
        />
      </span>
    )
  }

  createNameLabel = ({ firstName, lastName }) => {
    return <span>{`${firstName} ${lastName}`}</span>
  }

  createContactLI = user => {
    const { onUserClick, selectedUser } = this.props

    return (
      <ListItem
        key={`contact-${user.id}`}
        onClick={() => onUserClick(user.id)}
        selected={selectedUser === user.id}
      >
        {this.createNameLabel(user)}
        {this.createRemoveButton(user)}
      </ListItem>
    )
  }

  render() {
    const { cathegory, contacts } = this.props

    return (
      <TitledSegment
        title={cathegory}
      >
        <List>
          {contacts.map(
            user => this.createContactLI(user)
          )}
        </List>
      </TitledSegment>
    )
  }
}
