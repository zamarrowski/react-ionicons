import React, { Component } from 'react'

import styles from '../lib/index.css'
import icons from './icons.js'

class Ionicon extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  componentWillMount() {
    this._manageAnimation('shake')
    this._manageAnimation('beat')
    this._manageAnimation('rotate')
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <svg className={this._getClasses()} fill={this.props.color} width={this.props.fontSize} height={this.props.fontSize} viewBox="0 0 1024 1024">
        <path d={this._getPathByIconName()}></path>
      </svg>
    )
  }

  _getClasses() {
    return [...this.state.classNames].join(' ')
  }

  _getPathByIconName() {
    for (let icon of icons) {
      if (icon.tags[0] == this.props.icon) return icon.paths.join(' ')
    }
  }

  _manageAnimation(animation) {
    if (this.props[animation] && !this.state.animationActive) {
      this.setState({
        animationActive: true,
        classNames: [...this.state.classNames, animation]
      })
    }
  }
}


Ionicon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


Ionicon.propTypes = {
  // style
  style: React.PropTypes.object,
  color: React.PropTypes.string,
  fontSize: React.PropTypes.string,

  // animation
  shake: React.PropTypes.bool,
  beat: React.PropTypes.bool,
  rotate: React.PropTypes.bool
}


export default Ionicon
