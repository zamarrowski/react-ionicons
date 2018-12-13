import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMicOutline extends Component {

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
        <path d="M512 127.8c69.4 0 126 60.6 126 135.2v273.8c0 74.6-56.6 135.2-126 135.2s-126-60.6-126-135.2v-273.8c0-74.6 56.6-135.2 126-135.2zM512 96c-87.4 0-158 74.8-158 167v273.8c0 92.2 70.6 167.2 158 167.2s158-75 158-167.2v-273.8c0-92.2-70.6-167-158-167v0z M736 416v127.6c0 56.8-20.4 111-58.6 152.6-38 41.4-93.4 66.4-149 70.4l-16.4 1.2-16.8-1.2c-57-4.2-106.4-29.2-145.8-70.8s-61.4-95.6-61.4-152.2v-127.6h-32v127.6c0 134.4 108 245.2 242 255v97.4h-148v32h322v-32h-144v-97.4c132-9.8 240-120.6 240-255v-127.6h-32z"></path>
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


IosMicOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMicOutline.propTypes = {
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


export default IosMicOutline
