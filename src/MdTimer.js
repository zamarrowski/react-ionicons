import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdTimer extends Component {

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
        <path d="M465.8 743.2c0 25.4 20.8 46.2 46.2 46.2s46.2-20.8 46.2-46.2c0-25.4-20.8-46.2-46.2-46.2s-46.2 20.6-46.2 46.2zM465.8 96v184.8h92.4v-88.6c156.6 22.6 277.4 156.6 277.4 319.8 0 178.8-144.6 323.6-323.6 323.6s-323.6-144.8-323.6-323.6c0-77.6 27.2-148.8 73-204.4l250.6 250.6 65.2-65.2-314.4-314.2v1c-101.2 75.6-166.8 195.8-166.8 332.2 0 229.8 185.8 416 416 416 229.8 0 416-186.2 416-416s-186.2-416-416-416h-46.2zM789.4 512c0-25.4-20.8-46.2-46.2-46.2s-46.2 20.8-46.2 46.2 20.8 46.2 46.2 46.2c25.4 0 46.2-20.8 46.2-46.2zM234.6 512c0 25.4 20.8 46.2 46.2 46.2s46.2-20.8 46.2-46.2-20.8-46.2-46.2-46.2-46.2 20.8-46.2 46.2z"></path>
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


MdTimer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdTimer.propTypes = {
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


export default MdTimer
