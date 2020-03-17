import React, { Component } from 'react'

import Contacts from '../components/contacts/Contacts'
import ContactDetail from '../components/contactDetail/ContactDetail'

import styles from './App.scss'

export default class App extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <Contacts />
        <ContactDetail />
      </div>
    )
  }
}
