import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdGameControllerA extends Component {

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
        <path d="M312 430h-48v62h-62v48h62v60h48v-60h60v-48h-60z M738.6 288h-453.2c-122.4 0-221.4 93-221.4 222.8 0 130 99 225.2 221.4 225.2h453c122.4 0 221.4-95.2 221.4-225.2 0.2-129.8-98.8-222.8-221.2-222.8zM288.4 633c-66.2 0-120-54.2-120-121s53.8-121 120-121 120 54.2 120 121c0 66.8-53.6 121-120 121zM694.6 538.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4zM769.6 613.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.6 38 0 52.4zM769.6 463.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.6 38 0 52.4zM844.8 538.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4z"></path>
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


MdGameControllerA.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGameControllerA.propTypes = {
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


export default MdGameControllerA
