import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosApps extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <SVG
        style={this.props.style}
        className={this._getClasses()}
        fill={this.props.color}
        width={this.props.fontSize}
        height={this.props.fontSize}
        viewBox="0 0 1024 1024"
        onClick={this.props.onClick}
        rotate={this.props.rotate ? 1 : 0}
        shake={this.props.shake ? 1 : 0}
        beat={this.props.beat ? 1 : 0}
      >
        <path d="M308 320h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M564 320h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M820 320h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M308 608h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M564 608h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M820 608h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M308 896h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M564 896h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z M820 896h-104c-24.2 0-44-19.8-44-44v-104c0-24.2 19.8-44 44-44h104c24.2 0 44 19.8 44 44v104c0 24.2-19.8 44-44 44z"></path>
      </SVG>
    )
  }

  _getClasses() {
    return [...this.state.classNames, this.props.className].join(' ')
  }

  _getPathByIconName() {
    let icon = icons.find(icon => icon.tags[0] === this.props.icon)
    if (icon) return icon.paths.join(' ')
    return ''
  }

}


IosApps.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosApps.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosApps
