import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBoatOutline extends Component {

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
        <path d="M512 895.6c-59.2 0-139.8-13.4-192-31.6 0 0-70 45-160 64 64.6 0 106.6-18 160-32 46 18 133.4 31.6 192 31.6s148-11.6 192-31.6c53.4 14 94 32 160 32-87.6-19-160-64-160-64-52.2 18.2-132.8 31.6-192 31.6z M891 526c0 0 0 0 0 0l-61.4-28.2-46-243.8v-0.2c-11-53.2-34.8-93.8-79.6-93.8h-69.2l-16.4-64h-213.4l-16.2 64h-68.8c-45.8 0-70.2 41.4-79.6 94l-46 243.8-61.4 28.2c0 0 0 0 0 0-12.4 5.8-21 18.2-21 32.8 0 4.8 1 9.2 2.6 13.4l109.4 291.8c55 0 113.4-38 113.4-38 39.8 20 121.6 37.6 174.6 37.6s134.8-17.6 174.6-37.6c0 0 58.4 38 113.4 38l109.4-291.8c1.6-4.2 2.6-8.6 2.6-13.4 0-14.6-8.6-27-21-32.8zM429.8 128h163.6l8.2 32h-180l8.2-32zM271.8 259.8c7.6-42 22.2-67.8 48.2-67.8h384c25.6 0 39.4 25.6 48.2 68.2l41.8 221.2-72.8-33.4h0.4c17.8 0 33.6-9.2 30.2-32l-30.2-160c-6-22-14.4-32-32.2-32h-354.6c-17.8 0-27.2 10.6-32.2 32l-30.2 160c-2.6 16 12.4 32 30.2 32h0.4l-73 33.4 41.8-221.6zM512 352l-139.4 64h-67.6l29-153.2c0.8-3.2 1.6-5.4 2.2-6.8h351.6c0.6 1.4 1.6 3.8 2.6 7.4l28.8 152.6h-67.6l-139.6-64zM335.4 789.2l-15.4 10c-11.4 7.4-42.4 24-73.4 30.4l-102.6-270.8c0-2.2 1.6-3.2 2.2-3.6l349.8-163.8v439.6c-48-3-112.4-17.6-144.2-33.6l-16.4-8.2zM777.4 829.6c-31-6.4-62-23-73.4-30.4l-15.4-10-16.4 8.2c-31.8 16-96.4 30.8-144.2 33.6v-439.6l349.8 163.8c0.6 0.4 2.2 1.4 2.2 3.6l-102.6 270.8z M624 532c0 24.301-10.745 44-24 44s-24-19.699-24-44c0-24.301 10.745-44 24-44s24 19.699 24 44z M448 532c0 24.301-10.745 44-24 44s-24-19.699-24-44c0-24.301 10.745-44 24-44s24 19.699 24 44z"></path>
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


IosBoatOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBoatOutline.propTypes = {
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


export default IosBoatOutline
