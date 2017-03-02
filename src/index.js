import React, { Component } from 'react'
import ionicons from './../ionicons/css/ionicons.css'
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
      className={ionicons[this.props.icon] + ' ' + `${this.props.rotate ? styles.rotate : ''}`}
      style={style}
      ></i>)
  }
}

export default Ionicon
