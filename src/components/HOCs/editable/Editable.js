import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Editable.scss'


export default function Editable(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      value:     PropTypes.string.isRequired,
      edit:      PropTypes.bool.isRequired,
      reference: PropTypes.object.isRequired
    }

    render() {
      const { value, edit, reference } = this.props

      return (
        <>
          <WrappedComponent
            className={`
              ${styles.border}
              ${!edit && styles.hide}
            `}
            reference={reference}
          />

          <div
            className={`
              ${styles.prewrap}
              ${edit && styles.hide}
            `}
          >
            {value}
          </div>
        </>
      )
    }
  }
}
