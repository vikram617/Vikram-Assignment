import React from 'react'
import PropTypes from 'prop-types'

import EditableLabel
  from '../../PCs/editableLabel/EditableLabel'
import EditableSegment
  from '../../PCs/editableSegment/EditableSegment'


export default function Details({
  user, editing, phoneRef, emailRef, addressRef, noteRef
}) {
  return (
    <table>
      <tbody>
        <tr>
          <td>phone</td>
          <td>
            <EditableLabel
              label="phone"
              value={user?.phone || ''}
              edit={editing}
              reference={phoneRef}
            />
          </td>
        </tr>

        <tr>
          <td>email</td>
          <td>
            <EditableLabel
              label="email"
              value={user?.email || ''}
              edit={editing}
              reference={emailRef}
            />
          </td>
        </tr>

        <tr>
          <td>address</td>
          <td>
            <EditableSegment
              label="address"
              value={user?.address || ''}
              edit={editing}
              reference={addressRef}
            />
          </td>
        </tr>

        <tr>
          <td>note</td>
          <td>
            <EditableSegment
              label="note"
              value={user?.note || ''}
              edit={editing}
              reference={noteRef}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

Details.propTypes = {
  user: PropTypes.shape({
    phone:   PropTypes.string,
    email:   PropTypes.string,
    address: PropTypes.string,
    note:    PropTypes.string
  }),
  editing:    PropTypes.bool,
  phoneRef:   PropTypes.object,
  emailRef:   PropTypes.object,
  addressRef: PropTypes.object,
  noteRef:    PropTypes.object
}
