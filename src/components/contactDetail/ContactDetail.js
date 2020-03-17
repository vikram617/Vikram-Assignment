import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Name from './name/Name'
import Details from './details/Details'
import Buttons from './buttons/Buttons'

import {
  addNewUser,
  editUser
} from '../../actions/app.actions'
import {
  createUserAsync,
  updateUser
} from '../../actions/users.actions'

import styles from './ContactDetail.scss'

const ATTRIBUTES = [
  'firstName',
  'lastName',
  'phone',
  'email',
  'address',
  'note'
]


class ContactDetail extends Component {
  static propTypes = {
    user:       PropTypes.object,
    editing:    PropTypes.bool.isRequired,
    editUser:   PropTypes.func.isRequired,
    addNewUser: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      valuesValid: true
    }

    ATTRIBUTES.forEach(attribute => {
      this[attribute] = createRef()
    })
  }

  componentDidUpdate(_, prevState) {
    const { valuesValid: prevValuesValid } = prevState
    const { valuesValid } = this.state
    const { user } = this.props

    if (prevValuesValid === valuesValid) {
      ATTRIBUTES.forEach(attribute => {
        if (this[attribute].current) {
          this[attribute].current.value = (user && user[attribute]) || ''
        }
      })
    }
  }

  getValues = () => ATTRIBUTES.reduce(
    (acc, attribute) => ({
      ...acc,
      [attribute]: this[attribute].current.value
    }),
    {}
  )

  valuesValid = ({ firstName, lastName }) => firstName && lastName

  setFormValidity = valuesValid => this.setState(
    prevState => ({
      ...prevState,
      valuesValid
    })
  )

  checkValidityPerformAction = action => {
    const values = this.getValues()
    if (this.valuesValid(values)) {
      action(values)
      this.setFormValidity(true)
    } else {
      this.setFormValidity(false)
    }
  }

  saveUser = () => {
    const { createUserAsync } = this.props
    this.checkValidityPerformAction(createUserAsync)
  }

  saveUseredit = ({ id }) => {
    const { updateUser } = this.props
    const action = values => updateUser(id, values)
    this.checkValidityPerformAction(action)
  }

  render() {
    const { valuesValid } = this.state
    const {
      user, editing, editUser, addNewUser
    } = this.props


    return (
      <div className={styles.detail}>
        {(user || editing) && (
          <>
            <Name
              user={user}
              editing={editing}
              valid={valuesValid}
              firstNameRef={this.firstName}
              lastNameRef={this.lastName}
            />

            <Details
              user={user}
              editing={editing}
              phoneRef={this.phone}
              emailRef={this.email}
              addressRef={this.address}
              noteRef={this.note}
            />
          </>
        )}

        <Buttons
          user={user}
          editing={editing}
          addNewUser={addNewUser}
          editUser={() => editUser(user.id)}
          saveUser={() => user
            ? this.saveUseredit(user)
            : this.saveUser()
          }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    app: { selected, editing },
    users: { byId }
  } = state

  return { user: byId[selected], editing }
}

export default connect(
  mapStateToProps,
  {
    addNewUser,
    editUser,
    createUserAsync,
    updateUser
  }
)(ContactDetail)
