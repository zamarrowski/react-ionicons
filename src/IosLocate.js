import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLocate extends Component {

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
        <path d="M768 512c0-8.8 7.2-16 16-16h111.6c-8.2-199.4-168.2-359.4-367.6-367.6v111.6c0 8.8-7.2 16-16 16s-16-7.2-16-16v-111.6c-199.4 8.2-359.4 168.2-367.6 367.6h111.6c8.8 0 16 7.2 16 16s-7.2 16-16 16h-111.6c8.2 199.4 168.4 359.4 367.6 367.6v-111.6c0-8.8 7.2-16 16-16s16 7.2 16 16v111.6c199.4-8.2 359.4-168.4 367.6-367.6h-111.6c-8.8 0-16-7.2-16-16zM512 640c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128-57.4 128-128 128z M944 496h-48.4c0.2 5.4 0.4 10.6 0.4 16s-0.2 10.6-0.4 16h48.4c8.8 0 16-7.2 16-16s-7.2-16-16-16z M128.4 496h-48.4c-8.8 0-16 7.2-16 16s7.2 16 16 16h48.4c-0.2-5.4-0.4-10.6-0.4-16s0.2-10.6 0.4-16z M496 895.6v48.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.4c-5.4 0.2-10.6 0.4-16 0.4s-10.6-0.2-16-0.4z M528 128.4v-48.4c0-8.8-7.2-16-16-16s-16 7.2-16 16v48.4c5.4-0.2 10.6-0.4 16-0.4s10.6 0.2 16 0.4z"></path>
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


IosLocate.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLocate.propTypes = {
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


export default IosLocate
