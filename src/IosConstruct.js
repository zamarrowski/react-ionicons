import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosConstruct extends Component {

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
        <path d="M760.2 128.2v0 0z M550.2 114.6c-18.8-12-46.6-19.2-75.8-19.2-28.6 0-60.8 5-93.6 18.6-93 38-148.2 91-162.4 105-14 14-33.6 36-45.8 53.4s3.8 42-12.2 58-49.6 0-49.6 0c-2.8 0-5.8 1-7.8 3.2l-68.4 67.8c-4.4 4.4-4.4 11.4 0 15.6l127.2 126.4c2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2l66.4-69.6c4.4-4.4 4.4-11.4 0-15.6 0 0-10.6-10.4-24.2-24s1.6-38.8 10.6-46.8c9-8.2 23.2-13.6 42.4-13.6 8.6 0 14.8 1.4 22.8 3.6 24.4 6.8 51.6 31.8 101.8 81.6l-7.8 13c-4.6 7.6-1.8 16.6 2.6 20.8 0 0-10-9.8 26.2 26.4l100.2-94.4c-38.4-37.8-29-28.4-29-28.4-2.8-2.8-7.6-4.6-12.6-4.6-2.8 0-5.8 0.6-8.4 2l-11.4 6c-56.2-55.6-70.8-80.6-68.6-123.6 2.2-44.8 24.6-74.4 61.2-105.4 49.6-42.2 121.4-30.6 121.4-30.6 16-0.6-8.2-17.6-20.8-25.6z M925.4 800.2c0 0-138-114.6-260.8-231.6l-95.6 101.4c117.2 121.4 230.2 255.6 230.2 255.6 2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2l110.4-109.6c4.6-4.4 4.6-11.4 0.2-15.8z M959 250.2l-105 105.4-102.4-18.6-18.4-102.4 105-105.4c-22.4-22.4-53.6-33.2-78-33.2-1.4 0-2.8 0-4 0.2-25 1.4-78.6 15.4-120 59.4-40 42.4-82.2 121.4-45 209 4.4 10.6 9.4 24.6-5.4 39.4-3 2.8-19.8 18.8-45 42.6-7.2 6.8-15 14-23.2 22-16.2 15.2-34.2 32.4-53.6 50.6-7.6 7.2-15.4 14.6-23.2 22-114.2 107.8-254.2 239.4-254.2 239.4-36 31-33.4 88.4-0.2 121.8 17 16.8 40 25.6 62.6 25.6 22.2 0 43.8-8.4 59.2-26.2 0 0 131.2-139.8 238.8-254.2 7.4-8 14.8-15.8 22-23.4 18.6-19.8 36-38.2 51.6-54.6 7.8-8.4 15.2-16.2 22-23.2 23-24.4 38.8-40.8 42-44 8-7.8 15.4-10.2 22.2-10.2 6.6 0 12.6 2.4 17.2 4.8 19.8 10.2 42 14.8 64.8 14.8 53.6 0 110-24.8 144.4-59.2 48.8-48.8 57.8-96 59.2-120.2 1.4-23.8-6.8-55.6-33.4-82.2zM274.6 852.8c-11 10.8-28.8 10.8-39.8 0-10.8-11-10.8-28.8 0-39.8 11-10.8 28.8-10.8 39.8 0 10.8 11 10.8 29 0 39.8z"></path>
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


IosConstruct.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosConstruct.propTypes = {
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


export default IosConstruct
