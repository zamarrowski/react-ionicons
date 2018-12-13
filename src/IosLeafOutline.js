import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLeafOutline extends Component {

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
        <path d="M907.8 765.4c-103.6-16-109.8-25.4-109.8-25.4 31.2-148-46.4-308.2-154.2-397.2-143.6-118.4-361.8-32.4-531.8-212.4-1.6-1.6-3-2.4-4.4-2.4-33.2 0-4 481 200.6 667.8 85.6 78.4 179.8 100.2 255.4 100.2 61.6 0 111-14.6 133.6-25 45.6-21.2 77.4-67.8 77.4-67.8 74 23.2 114.6 24.4 122.6 24.4 1 0 1.4 0 1.4 0 0.8 0.2 1.6 0.2 2.4 0.2 27.6-0 40.6-57.2 6.8-62.4zM683.8 842c-17.8 8.2-63 22-120 22-39.2 0-77.4-6.4-113.4-19-43.8-15.2-84.2-39.8-120.4-72.8-40.8-37.2-77.2-90.4-108-158-26.6-58-48.6-125-65.2-199-13.6-60-23-123.6-26.8-178.8-1.2-19-1.8-34.6-1.8-47.2 92.8 76.4 195.6 92.8 287.6 107.6 77.8 12.4 151.2 24.2 207.8 70.8 51 42.2 93.4 99.4 119.2 161.2 28 66.8 31.8 133.8 25.4 201.4-360-126-529-341-529-341s145 250.4 504.6 401.6c-10.2 13-26.6 35.6-60 51.2z"></path>
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


IosLeafOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLeafOutline.propTypes = {
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


export default IosLeafOutline
