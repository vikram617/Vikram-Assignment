import React from 'react'
import PropTypes from 'prop-types'

import styles from './TitledSegment.scss'


export default function TitledSegment(
  { title, children, ...other }
) {
  return (
    <div
      className={styles.segment}
      {...other}
    >
      <h3>{title}</h3>
      {children}
    </div>
  )
}

TitledSegment.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired
}
