import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosReverseCameraOutline extends Component {

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
        <path d="M603.63 637.216c-26.228 22.058-57.912 34.712-91.63 34.712-72.72 0-132.572-57.93-141.78-123.93h61.22l-77.74-100-75.068 100h58.958c9.392 84 83.434 156 174.41 156 41.8 0 82.34-15.132 114.152-42.436l4.74-4.318-23.198-23.324-4.064 3.296z M631.472 397.77c-32.376-29.55-74.804-45.678-119.472-45.678-41.8 0-82.338 15.112-114.15 42.412l-4.742 4.104 23.198 23.22 4.066-3.412c25.854-21.744 58.394-34.010 91.628-34.010 72.686 0 132.548 57.594 141.782 127.594h-61.288l77.692 102.45 75.252-102.45h-59.024c-4.482-40-23.864-85.872-54.942-114.23z M835 320h-123.45c-64.21-72-84.438-96-109.050-96h-177c-24.628 0-44.334 24-109.042 96h-26.458v-32h-68v32h-27c-35.29 0-67 26.434-67 61.368v352.036c0 34.934 31.71 66.596 67 66.596h640c35.29 0 61-31.662 61-66.598v-352.034c0-34.934-25.71-61.368-61-61.368zM864 733.402c0 18.526-12.458 34.598-29 34.598h-640c-17.476 0-35-17.328-35-34.598v-352.034c0-16.332 16.252-29.368 35-29.368h121.458c0 0 8.248 0 12.266 0s6.45-0.398 11.536-6.4 15.404-20.016 22.16-27.59c22.592-25.332 38.914-43.83 50.632-54.264 9.492-8.45 12.422-7.746 12.45-7.746h177c0.032 0 3.222-0.726 13.418 8.438 12.282 11.042 29.41 33.68 53.116 60.396 5.776 6.51 14.428 16.22 18.634 20.88s8.504 6.286 11.542 6.286 12.34 0 12.34 0h123.448c17.664 0 29 11.93 29 29.368v352.034z"></path>
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


IosReverseCameraOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosReverseCameraOutline.propTypes = {
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


export default IosReverseCameraOutline
