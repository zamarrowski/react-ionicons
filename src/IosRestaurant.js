import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosRestaurant extends Component {

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
        <path d="M768 128c-49.6 0-96 154.6-96 320 0 114 64 160 64 160v256c0 17.6 14.4 32 32 32s32-14.4 32-32v-714c0-22-22-22-32-22z M576 128l20 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l-12-208h-16l-12 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l20-208h-16c0 0-48 214.4-48 256s26.8 77.2 64 90.4v389.6c0 17.6 14.4 32 32 32s32-14.4 32-32v-389.6c37.2-13.2 64-48.4 64-90.4s-48-256-48-256h-16z M320 128c-53 0-96 128-96 256 0 41.6 26.8 77.2 64 90.4v389.6c0 17.6 14.4 32 32 32s32-14.4 32-32v-389.6c37.2-13.2 64-48.4 64-90.4 0-128-43-256-96-256z"></path>
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


IosRestaurant.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRestaurant.propTypes = {
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


export default IosRestaurant
