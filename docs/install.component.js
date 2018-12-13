'use strict'
import React, { Component } from 'react'
import styles from './install.css'

class Install extends Component {
  constructor() {
    super()
    this.usageCode = `
    import React from 'react'
    import { render } from 'react-dom'
    import LogoNodejs from 'react-ionicons/lib/LogoNodejs'

    render(
      <LogoNodejs onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
    , document.getElementById('container'))
    `
  }
  render() {
    return(
      <div className="install">
        <h2>Install</h2>
        <p>Use <b>npm</b> to install react-ionicons:</p>
        <pre>
          npm install --save react-ionicons
        </pre>
        <p>For more information and configuration <b>see the repository in <a href="http://www.github.com/zamarrowski/react-ionicons">Github</a>.</b></p>

        <h2>Usage</h2>
        <pre>
          {this.usageCode}
        </pre>

        <h2>Features</h2>
        <ul>
          <li>No dependencies, just React.</li>
          <li>SVG Icons</li>
          <li>Simple API.</li>
          <li>Animations.</li>
          <li>Customizable.</li>
        </ul>
      </div>
    )
  }
}

export default Install
