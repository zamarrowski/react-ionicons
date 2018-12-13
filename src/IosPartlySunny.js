import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPartlySunny extends Component {

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
        <path d="M320 128h32v108h-32v-108z M32 416h110v32h-110v-32z M119 234.8l22-22.2 62.8 63-22 22.2z M478.8 295.8l-22-22.2 62.6-63 22.2 22.2z M145 641.4l-22-22.2 62.8-63 22 22.2z M330 276.6c-81 0-146.6 65.6-146.6 146.6 0 73.6 54.2 134.6 125 145 0 0-2.4-85.8 37.8-145.8s103.6-84 103.6-84c-26.8-37.4-70.4-61.8-119.8-61.8z M806.6 518.4c-1.6 0-3.2 0-4.8 0-6.2 0-12.2 0-18 0.8-22.6-100.6-112.2-176.4-219.4-176.4-29.2 0-57.2 5.6-82.8 15.8-10.2 4-20 8.8-29.4 14.2-64 37-108.2 104.8-112.4 183.2-0.2 4.2-0.4 8.2-0.4 12.4 0 6.8 0.4 13.6 1 20.2 0 0.8 0.2 1.6 0.2 2.2-75.8 6.8-135.2 74.2-135.2 152 0 82.2 66.6 153.4 148.6 153.4h452.8c102.4 0 185.4-86.8 185.4-189.6-0.2-102.8-83.2-188.2-185.6-188.2z"></path>
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


IosPartlySunny.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPartlySunny.propTypes = {
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


export default IosPartlySunny
