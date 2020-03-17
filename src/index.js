import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './_store/app.store'

import App from './app/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
