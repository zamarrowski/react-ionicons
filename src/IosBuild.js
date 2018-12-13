import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBuild extends Component {

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
        <path d="M894.4 250l-105 105.4-102.4-18.6-18.4-102.4 105-105.4c-22.2-22.2-53.6-33-77.8-33-1.4 0-2.8 0-4 0.2-25 1.4-78.6 15.4-120 59.4-40.2 42.4-82.2 121.2-45 209 4.4 10.6 9.4 24.6-5.4 39.4-15.2 14.8-399.4 376.6-399.4 376.6-36 31-33.4 88.4-0.2 121.8 17 16.8 40 25.6 62.6 25.6 22.2 0 43.8-8.4 59.2-26.2 0 0 358.8-382.2 376.4-399.6 8-7.8 15.4-10.2 22.2-10.2 6.6 0 12.6 2.4 17.2 4.8 19.8 10.2 42 14.8 64.8 14.8 53.6 0 110-24.8 144.4-59.2 48.8-48.8 57.8-96 59.2-120.2 1.6-23.8-6.8-55.6-33.4-82.2z"></path>
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


IosBuild.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBuild.propTypes = {
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


export default IosBuild
