import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAnalyticsOutline extends Component {

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
        <path d="M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0 162.4-162.4 162.4-426 0-588.4zM242.4 242.4c148.6-148.6 390.6-148.6 539.2 0 76 76 113 176.2 111.4 276-5.8-9.2-46.2-70.4-105-70.4-55.8 0-84.6 52.2-103.6 86.6-2.8 5.2-5.6 10-8 14.2-23.2 39-55.4 60.8-86.2 58.6-27.2-2-50.4-22.6-65.2-58.4-18.6-44.8-59.2-93-107.4-99.8-22.8-3.2-57.2 1.8-90.6 43.4-6.6 8.2-14 19-22.4 31.8-21.2 31.4-53 78.8-77.4 82.8-42 6.8-73.2-24.4-78.6-29.2-4-3.4-8.8-8.6-14.6-15.2-15-113.8 21-233.2 108.4-320.4zM781.6 781.6c-148.6 148.6-390.6 148.6-539.2 0-48.4-48.4-81-106.6-97.8-168.2 14 11.4 38.6 26.6 71 26.6 5.4 0 11.2-0.4 17-1.4 38-6.2 71.6-56.2 98.8-96.4 7.8-11.6 15-22.4 20.8-29.6 19.4-24 40-34.8 61.2-31.8 25.8 3.6 62.2 32.4 82.2 80.4 19.8 47.4 52.6 75.2 92.6 78 43.2 3 86.6-24.8 116-74.2 2.8-4.6 5.6-9.6 8.4-15 17.2-31.2 38.6-70.2 75.4-70.2 22.2 0 41.8 14.6 54.4 26.8 14.8 14.4 18 18 25.8 29.2 6.8 9.6 13 17.4 20.6 33.4-11.6 77.8-47.4 152.6-107.2 212.4z"></path>
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


IosAnalyticsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAnalyticsOutline.propTypes = {
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


export default IosAnalyticsOutline
