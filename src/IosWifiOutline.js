import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosWifiOutline extends Component {

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
        <path d="M512 224c144.6 0 293 58.2 402.8 156.8l-30.8 32.6c-45.8-40.8-97.4-73.6-154-97.4-69-29.2-142.4-44-218-44s-149 14.8-218 44c-56.6 24-108.2 56.6-154 97.4l-30.8-32.6c109.8-98.6 258.2-156.8 402.8-156.8zM512 192c-166 0-332.2 71.6-448 187.4l74.6 79.2c48.6-48.6 105-86.6 167.8-113.2 65.2-27.4 134.2-41.4 205.6-41.4s140.4 14 205.4 41.4c62.8 26.6 119.4 64.6 167.8 113.2l74.6-79.2c-115.6-115.8-281.8-187.4-447.8-187.4v0z M512 450c91.2 0 177.8 31.8 246.8 89.8l-34 34c-59.8-49.2-134.4-76-212.8-76s-153 26.8-212.8 76l-34-34c69-58 155.6-89.8 246.8-89.8zM512 418c-114.4 0-218 46.2-293.2 120.8l79.2 79.2c57.4-56.8 133.2-88 214-88s156.6 31.2 214 88l79.2-79.2c-75.2-74.6-178.8-120.8-293.2-120.8v0z M512 674c30.8 0 59.8 10.8 82.6 30.2l-82.6 82.6-82.6-82.6c22.8-19.4 51.8-30.2 82.6-30.2zM512 642c-51.8 0-97.8 24.6-127.2 62.8l127.2 127.2 127.2-127.2c-29.4-38.2-75.4-62.8-127.2-62.8v0z"></path>
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


IosWifiOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosWifiOutline.propTypes = {
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


export default IosWifiOutline
