'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
//import Root from './components/Root'
import Main from './components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

render(
  <MuiThemeProvider><Provider store={store}>
    <Main />
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)