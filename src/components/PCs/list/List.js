import React from 'react'
import PropTypes from 'prop-types'

import styles from './List.scss'


export default function List(
  { children, ...other }
) {
  return (
    <ul
      className={styles.list}
      {...other}
    >
      {children}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
