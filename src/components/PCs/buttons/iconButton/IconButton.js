import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'
import Icon  from '../../icon/Icon'


export default function IconButton({
  iconName, ...other
}) {

  return (
    <Button {...other}>
      <Icon name={iconName} />
    </Button>
  )
}

IconButton.propTypes = {
  onClick:  PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired
}
