import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.scss'


export default function Button({
  children, className, onClick, ...other
}) {
  const handleClick = event => {
    event.stopPropagation()
    onClick()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        ${styles.button}
        ${className}
      `}
      {...other}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick:   PropTypes.func.isRequired,
  className: PropTypes.string
}
