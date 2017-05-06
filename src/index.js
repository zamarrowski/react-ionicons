import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <svg style={this.props.style} className={this._getClasses()} fill={this.props.color} width={this.props.fontSize} height={this.props.fontSize} viewBox="0 0 1024 1024">
        <path d={this._getPathByIconName()}></path>
      </svg>
    )
  }

  _getClasses() {
    return [...this.state.classNames, this.props.className].join(' ')
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
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool
}


export default Ionicon
