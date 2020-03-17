import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './WithLabel.scss'

export default function WithLabel(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      label: PropTypes.string.isRequired,
      edit:  PropTypes.bool.isRequired,
      valid: PropTypes.bool.isRequired
    }

    render() {
      const { label, edit, valid } = this.props
      return (
        <div className={styles.withLabel}>
          <WrappedComponent {...this.props} />

          <div
            className={`
              ${styles.label}
              ${edit ? styles.visible : styles.hidden}
              ${!valid && styles.invalid}
            `}
          >
            {label}
          </div>
        </div>
      )
    }
  }
}
