import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdEyeOff extends Component {

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
        <path d="M512.2 289.6c112.4 0 203.8 90.6 203.8 202.2 0 26.2-5.2 51-14.6 74l119 118c61.6-51 110-116.8 139.8-192-70.6-177.4-244.6-303.2-448.4-303.2-57 0-111.6 10.2-162.2 28.2l88 87.4c23.2-9.2 48.2-14.6 74.6-14.6zM104.8 179.4l111.8 110.8c-67.8 52-120.8 121.6-152.6 201.6 70.4 177.4 244.4 303.2 448.2 303.2 63.2 0 123.4-12.2 178.4-34l136.6 135 51.8-51.4-722.6-716.6-51.6 51.4zM330 402.8l63.2 62.6c-2 8.4-3.2 17.4-3.2 26.2 0 67 54.6 121.2 122.2 121.2 9 0 18-1.2 26.4-3.2l63.2 62.6c-27.2 13.4-57.4 21.4-89.6 21.4-112.4 0-203.8-90.6-203.8-202.2-0-31.6 8.2-61.4 21.6-88.6zM505.6 371.4l128.4 127.4 0.8-6.4c0-67-54.6-121.2-122.2-121.2l-7 0.2z"></path>
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


MdEyeOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdEyeOff.propTypes = {
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


export default MdEyeOff
