import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGameControllerA extends Component {

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
        <path d="M738.538 292h-453.060c-122.396 0-221.478 90.916-221.478 218.836 0 128.002 99.082 221.164 221.478 221.164h453.058c122.444 0 221.464-93.162 221.464-221.164 0-127.92-99.020-218.836-221.462-218.836zM400 533.394c0 5.396-4.842 10.606-10.476 10.606h-69.524v70.278c0 5.66-6.208 9.722-11.606 9.722h-42.854c-5.256 0-9.542-3.836-9.542-9.066v-70.934h-70.276c-5.66 0-9.722-6.208-9.722-11.606v-42.854c0-5.256 3.836-9.542 9.066-9.542h70.934v-69.644c0-5.612 3.708-10.356 9.106-10.356h44.29c5.396 0 10.606 4.842 10.606 10.476v69.526h69.644c5.612 0 10.356 3.708 10.356 9.106v44.288zM639.532 550.972c-21.472 0-38.902-17.174-38.902-38.306 0-21.13 17.43-38.336 38.902-38.336 21.566 0 38.996 17.206 38.996 38.336 0 21.132-17.43 38.306-38.996 38.306zM724.628 634.602c-21.472 0-38.902-17.058-38.902-38.168 0-21.278 17.43-38.306 38.902-38.306 21.566 0 38.996 17.030 38.996 38.306 0 21.108-17.428 38.168-38.996 38.168zM724.628 467.23c-21.472 0-38.902-17.158-38.902-38.292s17.43-38.338 38.902-38.338c21.566 0 38.996 17.204 38.996 38.338s-17.428 38.292-38.996 38.292zM809.724 550.972c-21.458 0-38.884-17.174-38.884-38.306 0-21.13 17.428-38.336 38.884-38.336 21.474 0 38.904 17.206 38.904 38.336 0 21.132-17.428 38.306-38.904 38.306z"></path>
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


IosGameControllerA.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGameControllerA.propTypes = {
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


export default IosGameControllerA
