import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosHeadsetOutline extends Component {

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
        <path d="M688 423.6c-8.8 0-16-7.2-16-16 0-80-77.4-144-160-144s-160 64-160 144c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-50 23.6-88.6 59.2-123.2 35.2-34.2 82.4-52.8 132.8-52.8s97.6 18.8 132.8 52.8c35.6 34.4 59.2 73 59.2 123.2 0 8.8-7.2 16-16 16z M816 520h-48v-95.6c0-140.8-115.2-256-256-256v0 0c-140.8 0-256 115.2-256 256v95.6h-48c-79.2 0-144 64.8-144 144v31.6c0 79.2 64.8 144.4 144 144.4h48c0 8 7.2 15.8 16 15.8s16-7.4 16-16.2v-415.2c0-59.6 23.4-115.8 65.8-158.2s98.6-65.8 158.2-65.8c60 0 115.8 23.4 158.2 65.8s65.8 98.6 65.8 158.2v415.2c0 8.8 7.2 16.2 16 16.2s16-7.8 16-15.8h48c79.2 0 144-65.2 144-144.4v-31.6c0-79.2-64.8-144-144-144zM256 808h-48c-29.8 0-57.8-11.8-79-33.2s-33-49.4-33-79.2v-31.6c0-29.8 11.6-57.8 33-79s49.2-33 79-33h48v256zM928 695.6c0 29.8-11.6 58-33 79.2s-49.2 33.2-79 33.2h-48v-256h48c29.8 0 57.8 11.6 79 33s33 49.2 33 79v31.6z"></path>
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


IosHeadsetOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHeadsetOutline.propTypes = {
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


export default IosHeadsetOutline
