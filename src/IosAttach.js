import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAttach extends Component {

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
        <path d="M687 383c-9.4 0-17 7.6-17 17v314c0 38-15 76.4-41.8 104.8-27.4 28.8-66.6 45.2-104.2 45.2h-24c-79 0-148-72-148-150v-442.2c0-61.2 50.8-109.6 112-109.6s110 48.4 110 109.6v428.6c0 34.4-27.2 67.6-62 67.6s-64-33-64-67.6v-236.4c0-9.4-7.6-17-17-17s-17 7.6-17 17v236.4c0 57.6 44.6 99.6 98 99.6s96-40 96-99.6v-428.6c0-79.8-64.8-143.8-144.6-143.8s-143.4 64-143.4 143.8v442.2c0 46.4 19 93.6 54.6 128.6 35.4 34.8 79 53.4 125.4 53.4h24c96 0 180-82.8 180-182v-314c0-9.4-7.6-17-17-17z"></path>
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


IosAttach.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAttach.propTypes = {
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


export default IosAttach
