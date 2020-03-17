import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../PCs/icon/Icon'
import BorderedButton
  from '../../PCs/buttons/borderButton/BorderButton'

import styles from '../ContactDetail.scss'


export default function Buttons({
  user, editing, addNewUser, editUser, saveUser
}) {
  return (
    <>
      <BorderedButton
        className={styles.addButton}
        onClick={addNewUser}
      >
        <Icon name="plus" />
      </BorderedButton>

      {editing && (
        <BorderedButton
          className={styles.editButton}
          onClick={saveUser}
        >
          {'Done'}
        </BorderedButton>
      )}


      {user && !editing && (
        <BorderedButton
          className={styles.editButton}
          onClick={editUser}
        >
          {'Edit'}
        </BorderedButton>
      )}
    </>
  )
}

Buttons.propTypes = {
  user:       PropTypes.object,
  editing:    PropTypes.bool,
  addNewUser: PropTypes.func,
  editUser:   PropTypes.func,
  saveUser:   PropTypes.func
}
