import React from 'react'
import PropTypes from 'prop-types'

import styles from './ListItem.scss'


export default function ListItem(
  { children, selected, ...other }
) {
  return (
    <li
      className={`
        ${styles.listItem}
        ${selected && styles.selected}
      `}
      {...other}
    >
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  selected: PropTypes.bool
}
