import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBeerOutline extends Component {

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
        <path d="M767.4 236.6c0-41.6-34.4-76.6-76.2-76.6l-21-1.4c-12-54-64-94.6-118.2-94.6s-82.2 23.2-103.4 57.8c-17-19.6-42.2-30.8-70.4-30.8-36.6 0-68.2 23-83.4 53h-48.8c-50 0-86 39.2-86 90.8v8c0 57.6 32 41.8 32 79.6 0 35.6 0 213.6 0 213.6 0 26.8-22.4 38.6-22.4 70.4 0 17.6 16 33.6 33.6 33.6h20.8v-352h544c0 0-0.6-9.8-0.6-51.4zM735.2 256h-512.8c0 0-15.6 0-21.6 0s-8.8-7.6-8.8-13.2v-8c0-17.8 6.8-32.8 16.4-43.8 9.2-10.6 22.8-15 37.6-15h69l8.6-19.2c10-21 30.8-34.4 54.6-34.4 18 0 37 10.2 52.4 22.2l21.4 18.6 16-20c22.6-30 52.8-47.6 84.2-47.6 20.6 0 40 6.8 56 19.8 15.6 12.6 26.6 30.2 30.8 49.6l5.2 23.6c0 0 18.8-0.8 47 3.2s44.2 20.8 44.2 44.8l-0.2 19.4z M616 448c0 22.091-17.909 40-40 40s-40-17.909-40-40c0-22.091 17.909-40 40-40s40 17.909 40 40z M544 544c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z M576 704c0 13.255-10.745 24-24 24s-24-10.745-24-24c0-13.255 10.745-24 24-24s24 10.745 24 24z M192 928h608v32h-608v-32z M832 416h-96v-96h-480v544l-32 32h544l-32-32v-128h96c17.6 0 32-14.4 32-32v-256c0-17.6-14.4-32-32-32zM704 864h-416v-512h416v512zM832 704c0 0 0 0 0 0h-96v-256h96c0 0 0 0 0 0v256z"></path>
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


IosBeerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBeerOutline.propTypes = {
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


export default IosBeerOutline
