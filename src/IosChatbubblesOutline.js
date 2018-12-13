import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosChatbubblesOutline extends Component {

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
        <path d="M862 641.2c0-8.8 2.4-17.2 6.6-24.4 1.2-2.2 2.8-4.2 4.2-6.2 34.8-52 55.2-114.2 55.2-180.6 0.6-184.4-155-334-347.4-334-167.8 0-307.8 114.2-340.6 265.8-4.8 22.2-7.4 44.8-7.4 68.4 0 184.6 149.6 338.2 342 338.2 30.6 0 71.8-9.2 94.4-15.4s45-14.4 50.8-16.6 12.2-3.4 18.6-3.4c7.2 0 14 1.4 20.2 4l113.4 40.2c0 0 4.8 2 7.8 2 8.8 0 16-7 16-16 0-2-1-5.4-1-5.4l-32.8-116.6zM770.2 707.2c-10-4-20.6-6.4-31.6-6.4-8.2 0-20.2 1.6-24.4 3.2s-22.6 7.6-22.6 7.6c-8.4 2.8-19.8 7.6-30.4 10.2-28 7.2-60.2 14.4-86.4 14.4-83.8 0-162.2-32.2-220.6-90.6-28.2-28.2-50.2-61-65.6-97.4-15.8-37.6-23.8-77.4-23.8-118.2 0-20.4 2.2-41.2 6.6-61.6 14.4-66.8 53-127.6 108.4-171.4 27.6-21.8 58.8-39 92.2-50.8 34.8-12.2 71.4-18.4 108.8-18.4 44 0 86.6 8.4 126.6 25.2 38.6 16.2 72.8 39.2 102 68.4 56 56.6 86.6 130.6 86.6 208.6v0 0c0 57.8-17.2 114-49.4 162.4-0.2 0.2-0.4 0.6-0.6 0.8-1.4 1.8-3.2 4.4-5 7.6-7 12.2-10.8 24.8-10.8 40.2s16.4 65 26 96.4l-86-30.2z M610.6 791.4c-12.6 12.2-24.2 20.8-24.2 20.8-49.8 40.4-112.8 62.8-179 62.8-37.6 0-74.2-7.2-109-21.4-0.8-0.4-1.6-0.6-2-0.8v0c-1.2-0.6-2.4-1-3.6-1.2-14-4.6-29.4-4-42.8 1.4l-85 33.6 18.6-97c0.2-1 0.2-2 0.2-3 0-10.2-2.6-20-7.8-28.6l-0.8-1.4c-1-1.6-2-3.6-3.4-5.4-28.8-43.4-44-93.8-44-145.8 0-60 21.2-125.6 75.6-185.8 1.2-8.6 2.6-17.2 4.6-25.6 2-9 4.4-18 7-26.8l-16 14.2c-65.4 57-103 138.6-103 223.6 0 58.6 17.2 115.2 49.6 164 0.2 0.2 0.4 0.4 0.6 0.8 0.4 0.4 1.2 1.8 1.6 2.8 0.4 0.6 0.6 1.2 1 1.6 2 3.4 3 6.8 3.2 10.8l-23.8 124c-1.2 5.8 1 11.6 5.4 15.4 3 2.4 6.6 3.6 10.2 3.6 2 0 4-0.4 5.8-1.2l112.2-44.2c3.6-1.4 7.4-2.2 11.4-2.2 3.6 0 7.2 0.6 10.6 1.8 0.4 0.2 1 0.4 1.4 0.4v0c0.2 0.2 0.4 0.2 0.6 0.2 38.6 16 79.6 24 121.4 24 93.2 0 180.8-40.2 240.2-110.2 0 0 6.4-8.8 13.8-19.2-7.6 2.4-16 5-24.4 7.4-7.2 2.2-16.2 4.4-26.2 6.6z"></path>
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


IosChatbubblesOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosChatbubblesOutline.propTypes = {
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


export default IosChatbubblesOutline
