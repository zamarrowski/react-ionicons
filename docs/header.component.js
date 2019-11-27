'use strict'
import React, { Component } from 'react'
import IosIonic from 'react-ionicons/lib/IosIonic'
import AppBar from 'material-ui/AppBar'

class Header extends Component {
  render() {
    const appBarStyles = {
      backgroundColor: '#298fff'
    }
    return(
      <AppBar
        title={<span>react-ionicons<sup style={{fontSize: '12px'}}>v3</sup></span>}
        style={appBarStyles}
        iconElementLeft={<IosIonic fontSize="50px" color="white" rotate={true}></IosIonic>}
      />
    )
  }
}

export default Header
