import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoJavascript extends Component {

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
        <path d="M416 176.002h-160v424.996c0 105.16-36.064 134.522-98.824 134.522-29.41 0-55.896-5.042-76.5-12.126l-16.676 124.414c29.4 10.124 74.518 16.192 109.814 16.192 144.096 0 242.186-67.742 242.186-261.96v-426.038z M764.926 160c-154.886 0-252.926 87.996-252.926 204.308 0 100.166 75.502 162.88 185.282 203.33 79.4 28.316 110.784 53.616 110.784 95.078 0 45.512-36.278 74.85-104.896 74.85-63.726 0-121.578-21.28-160.788-42.51v-0.042l-30.382 126.44c37.278 21.276 106.882 42.51 182.334 42.51 181.374-0.004 265.666-97.104 265.666-211.396 0-97.1-53.916-159.8-170.556-204.326-86.278-34.382-122.54-53.59-122.54-97.084 0-34.4 31.376-65.738 96.086-65.738 63.692 0 107.488 21.414 133.010 34.582l38.25-128c-40-17.562-93.874-32.002-169.324-32.002v0z"></path>
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


LogoJavascript.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoJavascript.propTypes = {
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


export default LogoJavascript
