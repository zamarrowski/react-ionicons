'use strict'
import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Header from './header.component.js'
import Jumbo from './jumbo.component.js'
import Install from './install.component.js'
import Examples from './examples.component.js'

injectTapEventPlugin()

render(
  <MuiThemeProvider>
    <div>
      <Header></Header>
      <Jumbo></Jumbo>
      <Examples></Examples>
      <Install></Install>
    </div>
  </MuiThemeProvider>
, document.getElementById('container'))
