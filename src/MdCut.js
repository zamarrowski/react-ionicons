import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCut extends Component {

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
        <path d="M406.2 316.6c10.4-22.4 16.2-47 16.2-73.4 0-99-80.2-179.2-179.2-179.2s-179.2 80.2-179.2 179.2 80.2 179.2 179.2 179.2c26.4 0 51-5.8 73.4-16.2l105.8 105.8-105.8 105.8c-22.4-10.4-47-16.2-73.4-16.2-99 0-179.2 80.2-179.2 179.2s80.2 179.2 179.2 179.2 179.2-80.2 179.2-179.2c0-26.4-5.8-51-16.2-73.4l105.8-105.8 313.6 313.6h134.4v-44.8l-553.8-553.8zM243.2 332.8c-49.2 0-89.6-39.8-89.6-89.6s40.4-89.6 89.6-89.6 89.6 39.8 89.6 89.6-40.4 89.6-89.6 89.6zM243.2 870.4c-49.2 0-89.6-39.8-89.6-89.6s40.4-89.6 89.6-89.6 89.6 39.8 89.6 89.6-40.4 89.6-89.6 89.6zM512 534.4c-12.6 0-22.4-9.8-22.4-22.4s9.8-22.4 22.4-22.4c12.6 0 22.4 9.8 22.4 22.4s-9.8 22.4-22.4 22.4zM825.6 108.8l-268.8 268.8 89.6 89.6 313.6-313.6v-44.8h-134.4z"></path>
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


MdCut.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCut.propTypes = {
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


export default MdCut
