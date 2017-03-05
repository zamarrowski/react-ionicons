import React, { Component } from 'react'
import ionicons from './../ionicons/css/ionicons.min.css'
import styles from './index.css'

class Ionicon extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const style = {
      fontSize: this.props.fontSize,
      color: this.props.color
    }

    return(
      <i
      className={this._getClasses()}
      style={style}
      ></i>)
  }

  _getClasses() {
    const classNames = [this.props.icon]
    if (this.props.rotate) classNames.push('rotate')
    if (this.props.shake) classNames.push('shake')
    return classNames.join(' ')
  }
}

export default Ionicon
