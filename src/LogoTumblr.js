import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoTumblr extends Component {

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
        <path d="M642.4 792.6c-23.6 0-44.8-5.6-63-16.6-13.8-8.2-23-19.2-28-32.8-5.2-13.8-7.2-44.6-7.2-92.8v-202.4h192v-128h-192v-224h-123.8c-5.4 43-15 89.4-29 117.2s-28 51.6-51.2 71.4c-23.2 19.8-51.2 35.8-83.8 46.6v116.8h96v280.8c0 38 4 67 11.8 87 8 20 22.2 39 42.8 56.8s45.6 31.4 74.6 41c29.2 9.6 62.8 14.4 100.8 14.4 33.4 0 60.6-3.4 89.4-10.2s61-18.6 96.4-35.2v-131.2c-41.8 27.4-83.6 41.2-125.8 41.2z"></path>
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


LogoTumblr.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoTumblr.propTypes = {
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


export default LogoTumblr
