import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Ionicon from 'react-ionicons'
import TextField from 'material-ui/TextField'

import styles from './iconsContainer.css'
import iconsName from './icons.constant.js'

class IconsContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchIcon: '',
      iconsFiltered: iconsName
    }
  }

  handleSearchIcon(event) {
    this.setState({searchIcon: event.target.value})
    let icons = iconsName.filter(icon => icon.indexOf(event.target.value) > -1)
    this.setState({iconsFiltered: icons})
  }

  render() {
    return (
      <div className="iconsContainerSection">
        <h2>Icons</h2>
          <TextField
            floatingLabelText="Search icon..."
            value={this.state.searchIcon}
            onChange={this.handleSearchIcon.bind(this)}
          />
        <div className="iconsContainer">
            {this.state.iconsFiltered.map((icon, key) => (
              <Paper className="icon" zDepth={2} key={key}>
                <Ionicon icon={icon} fontSize="20px"></Ionicon>
                <div>
                  <span className="iconName">{icon}</span>
                </div>
              </Paper>
              ))}
        </div>
      </div>
    )
  }
}

export default IconsContainer
