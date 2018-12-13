import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAppsOutline extends Component {

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
        <path d="M308 160c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM308 128h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M564 160c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM564 128h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M820 160c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM820 128h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M308 448c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM308 416h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M564 448c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM564 416h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M820 448c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM820 416h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M308 736c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM308 704h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M564 736c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM564 704h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M820 736c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM820 704h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z"></path>
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


IosAppsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAppsOutline.propTypes = {
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


export default IosAppsOutline
