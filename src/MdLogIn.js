import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdLogIn extends Component {

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
        <path d="M512 96c-85.8 0-168.4 26-238.4 75-68.4 48-120.4 114.4-150.2 192.2l-7.4 20.8h91.4l3.8-10c16.4-35.6 38.8-67.8 67-96 62.4-62.4 145.4-96.8 233.8-96.8s171.4 34.4 233.8 96.8c62.4 62.4 96.8 145.4 96.8 233.8 0 88.2-34.4 171.4-96.8 233.8s-145.4 96.8-233.8 96.8c-88.2 0-171.2-34.4-233.8-96.8-28-28-50.6-60.2-67-95.8l-3.8-10h-91.4l7.2 20.8c29.8 77.8 81.8 144.2 150.2 192.2 70.2 49.4 152.6 75.2 238.6 75.2 229.4 0 416-186.6 416-416s-186.6-416-416-416z M96 554.8h379.4l-87.2 89.4 59.8 59.8 192-192-192-192-62 59.8 89.4 89.4h-379.4v85.6z"></path>
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


MdLogIn.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdLogIn.propTypes = {
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


export default MdLogIn
