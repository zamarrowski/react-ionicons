import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLocateOutline extends Component {

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
        <path d="M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128z M944 496h-48.4c-8.2-199.4-168.2-359.4-367.6-367.6v-48.4c0-8.8-7.2-16-16-16s-16 7.2-16 16v48.4c-199.4 8.2-359.4 168.2-367.6 367.6h-48.4c-8.8 0-16 7.2-16 16s7.2 16 16 16h48.4c8.2 199.4 168.4 359.4 367.6 367.6v48.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.4c199.4-8.2 359.4-168.4 367.6-367.6h48.4c8.8 0 16-7.2 16-16s-7.2-16-16-16zM760.8 760.8c-62.8 62.8-144.8 98.8-232.8 102.8v-79.6c0-8.8-7.2-16-16-16s-16 7.2-16 16v79.6c-88-4-170.2-40-232.8-102.8-62.8-62.6-99-144.8-102.8-232.8h79.6c8.8 0 16-7.2 16-16s-7.2-16-16-16h-79.6c4-88 40-170.2 102.8-232.8s144.8-99 232.8-102.8v79.6c0 8.8 7.2 16 16 16s16-7.2 16-16v-79.6c88 4 170.2 40 232.8 102.8s99 144.8 102.8 232.8h-79.6c-8.8 0-16 7.2-16 16s7.2 16 16 16h79.6c-3.8 88-40 170.2-102.8 232.8z"></path>
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


IosLocateOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLocateOutline.propTypes = {
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


export default IosLocateOutline
