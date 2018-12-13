import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosVolumeOff extends Component {

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
        <path d="M730 776c60-70.4 94-168 94-264s-31.2-184.6-83.8-256.2l-27.2 20.6c48.4 65.8 77.2 147.4 77.2 235.6s-28.8 169.8-77.2 235.6l17 28.4z M702.4 512c0-71.8-24-138-64-191.6l-27 20.2c35.8 48 57.2 107.2 57.2 171.6 0 42.8-9.6 83.4-26.6 120l20.2 34.6c25.6-46 40.2-98.6 40.2-154.8z M587.8 512c0-48-16.4-92-43.6-127.8l-27 19.6c16 20.8 27.4 45 33 71.4l36.2 61.6c1-8 1.4-16.4 1.4-24.8z M316.8 432h-116.8v160h116.8l139.2 112v-185.6l-79-134.8z M325.6 160l-29.6 17 402.4 687 29.6-17z"></path>
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


IosVolumeOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosVolumeOff.propTypes = {
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


export default IosVolumeOff
