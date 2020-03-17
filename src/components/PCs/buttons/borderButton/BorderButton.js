import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'

import styles from './BorderedButton.scss'


export default function BorderedButton({
  className,
  ...other
}) {
  return (
    <Button
      className={`
        ${styles.borderedButton}
        ${className}
      `}
      {...other}
    />
  )
}

BorderedButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick:   PropTypes.func.isRequired,
  className: PropTypes.string
}
