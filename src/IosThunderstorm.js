import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosThunderstorm extends Component {

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
        <path d="M748.8 283.8l-26.6-0.2c-23.4-107.2-110.2-187.6-250.2-187.6s-255.6 100.8-255.6 243l0.6 9.6c-84.4 11.2-153 90.6-153 179.4 0 94 75.8 176 169.4 176h193.6l17.2-64h-141.8l8.6-39 64-288 5.6-25h271.8l-12.4 41.2-35.6 118.8h135.6l-30.8 49-130.4 207h155.2c144 0 226-104 226-220 0-117.2-94.6-200.2-211.2-200.2z M682 480h-120.6l48-160h-203.4l-64 288h144l-85.8 320z"></path>
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


IosThunderstorm.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosThunderstorm.propTypes = {
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


export default IosThunderstorm
