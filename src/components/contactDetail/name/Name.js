import React from 'react'
import PropTypes from 'prop-types'

import LabeledEditableLabel
  from '../../PCs/labeledEditableLabel/LabeledEditableLabel'


export default function Name({
  user, editing, valid, firstNameRef, lastNameRef
}) {
  return (
    <div>
      <LabeledEditableLabel
        label="first name"
        value={user?.firstName || ''}
        edit={editing}
        valid={valid}
        reference={firstNameRef}
      />
      <LabeledEditableLabel
        label="last name"
        value={user?.lastName || ''}
        edit={editing}
        valid={valid}
        reference={lastNameRef}
      />
    </div>
  )
}

Name.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName:  PropTypes.string
  }),
  editing:      PropTypes.bool,
  valid:        PropTypes.bool,
  firstNameRef: PropTypes.object,
  lastNameRef:  PropTypes.object
}
