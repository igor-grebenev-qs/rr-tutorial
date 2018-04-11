import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore'
import classNames from 'classnames'
import appStyles from './assets/styles/appStyles.css'
import app from './assets/styles/applicationsContainer.css'
import Sidebar from 'react-side-bar'

console.log('RR entry point (index.js)')
const store = configureStore()

render(
  <Provider store={store}>
    <div className={classNames(appStyles.applicationContainer, app.body)}>
      <AppContainer />
    </div>
  </Provider>,
  document.getElementById('root')
)
