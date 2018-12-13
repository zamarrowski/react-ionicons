import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCloudCircleOutline extends Component {

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
        <path d="M548.6 352c28 0 54.4 10.6 74.8 29.8 20.4 19.4 33.2 46.2 36.4 75.4l2.6 24.2 24.2 4c28.8 4.6 49.6 30 49.6 60.4 0 16.8-6.4 32.4-17.8 44.4-11.2 11.6-25.8 18-41.2 18h-330.4c-15.4 0-30-6.4-41.2-18-11.4-12-17.8-27.8-17.8-44.4 0-28.6 17.8-53.6 44.2-62.2l21.8-7 0.4-22.8c0.4-22.4 18-40.8 39.4-40.8 5.6 0 16.8 2.2 24.2 5.6s17.6 8 17.6 8l15.2-21.8c20.8-32.6 58.4-52.8 98-52.8zM548.6 320c-51.2 0-98.8 26.8-125 67.6-9-4.2-19.2-6.8-29.8-6.8-39 0-70.8 32.2-71.4 72.2-40 13-66.4 50.4-66.4 92.4 0 51.4 40.6 94.4 90.8 94.4h330.2c50.2 0 90.8-42.8 90.8-94.4 0-46.4-33.2-84.8-76.6-91.8-7.6-75-67.2-133.6-142.6-133.6v0z M512 128c51.8 0 102.2 10.2 149.4 30.2 45.8 19.4 86.8 47 122 82.4 35.2 35.2 63 76.4 82.4 122 20 47.4 30.2 97.6 30.2 149.4s-10.2 102.2-30.2 149.4c-19.4 45.8-47 86.8-82.4 122-35.2 35.2-76.4 63-122 82.4-47.4 20-97.6 30.2-149.4 30.2s-102.2-10.2-149.4-30.2c-45.8-19.4-86.8-47-122-82.4-35.2-35.2-63-76.4-82.4-122-20-47.2-30.2-97.6-30.2-149.4s10.2-102.2 30.2-149.4c19.4-45.8 47-86.8 82.4-122 35.2-35.2 76.4-63 122-82.4 47.2-20 97.6-30.2 149.4-30.2zM512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416v0z"></path>
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


IosCloudCircleOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudCircleOutline.propTypes = {
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


export default IosCloudCircleOutline
