import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosRoseOutline extends Component {

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
        <path d="M757.2 324.2c-57 102.2-32.8 183.4-10.8 256.6 11 37.2 21.6 72.2 21.6 109.2 0 58-23 108.4-66.4 145.4-46.4 39.6-112 60.4-189.6 60.4s-143-21-189.6-60.4c-43.4-37-66.4-87.2-66.4-145.4 0-57.8 13.6-102.4 42.8-140 26-33.6 65.2-63.2 126.8-95.8l13-7c40.4-21.4 54-28.8 88-43.8 63.8-28.4 133.2-52.8 206.4-72.6 8-2.2 16.2-4.4 24.2-6.6zM832 274.2c-37.8 7.8-73.6 16.4-107.4 25.6-81 22-151 47.8-210.8 74.4-38.6 17.2-52.4 24.8-103 51.8-116.8 61.8-186.8 128.6-186.8 264 0 135.6 111.2 238 288 238s288-102.4 288-238c0-135.4-122-237.4 32-415.8v0z M269 268c42.6 13 94.6 31.4 138.4 55.2 11 6 21 12 30 18-9.6 4.8-19 9.6-28.2 14.4-14.4 7.6-28.8 15.6-42.4 23.6-21.4 12.4-41.6 25.2-60.6 38-1.2-46.8-11-98.6-37.2-149.2zM192 214.8c83 87.4 89.2 193 78.8 268.8 25.6-21 62.4-47.8 112.2-76.8 12.8-7.6 26.6-15.2 41.2-22.8 23.2-12.2 47-23.8 71.6-34.8-18.2-20.2-44.2-38.2-73.2-54-97.4-53-230.6-80.4-230.6-80.4v0z M689.8 188.6c9.8 12.4 22.8 30.2 33 47.6-59.6 15.8-131.2 39.2-188.6 62-11.2-11-24.4-21.6-39.2-32 42.2-34.2 89.4-53.2 124.4-63.4 29.8-8.6 55.2-12.6 70.4-14.2zM704 155.4c0 0-157.2 4.4-261.4 116 33.2 18.4 59.4 38 78 58.6l5.4 6c74.4-31.2 176.2-63.4 242-78-12.8-43.4-64-102.6-64-102.6v0z M362.2 137.8c18 11 44.2 29.4 70.6 57.2-9 7.4-17.6 15-25.8 23-28.4-13.4-50.2-22.8-72.8-30.6 7.2-15 16.6-32 28-49.6zM352 96c-30.6 41.6-51.4 84.2-60.6 111.4 42.2 11.8 71 24.6 122.8 49.4 19-21.2 40.8-40.2 65.2-56.8-58.8-75-127.4-104-127.4-104v0z"></path>
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


IosRoseOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRoseOutline.propTypes = {
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


export default IosRoseOutline
