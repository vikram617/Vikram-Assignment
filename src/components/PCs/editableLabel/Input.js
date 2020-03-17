import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  static propTypes = {
    reference: PropTypes.object.isRequired
  }

  render() {
    const { reference, ...other } = this.props

    return (
      <input
        ref={reference}
        {...other}
      />
    )
  }
}
