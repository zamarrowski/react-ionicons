import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosColorPalette extends Component {

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
        <path d="M860.2 695.8c-13.2-12.2-32.6-15.2-49.2-18-23-3.8-31.8-8-45.2-20-28.6-25.4-28.6-62.2 0-87.6l60.6-53.8c92.8-82 92.8-216.4 0-298.4-68.4-60.2-160.2-90-255.6-90-111.4 0-227.8 40.6-317.6 120.2-167 147.6-167 389.4 0 537 83 73.4 195 110 305.8 110.8 1.2 0 2.4 0 3.4 0 110.8 0 220-35.8 297.6-104.8 28.8-25.4 24-73.2 0.2-95.4zM240 432c0-35.4 28.6-64 64-64s64 28.6 64 64-28.6 64-64 64-64-28.6-64-64zM320 684c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM448 362c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM592 800c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zM640 384c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64z"></path>
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


IosColorPalette.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosColorPalette.propTypes = {
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


export default IosColorPalette
