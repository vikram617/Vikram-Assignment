import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextArea extends Component {
  static propTypes = {
    reference: PropTypes.object.isRequired
  }

  render() {
    const { reference, ...other } = this.props

    return (
      <textarea
        ref={reference}
        {...other}
      />
    )
  }
}
