import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '../iconButton/IconButton'

import styles from './RemoveButton.scss'


export default function RemoveButton(props) {
  return (
    <IconButton
      className={styles.removeButton}
      iconName="minus-circle"
      {...props}
    />
  )
}

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
