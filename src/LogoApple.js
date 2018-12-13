import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoApple extends Component {

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
        <path d="M667.2 307.8c-67.2 0-95.6 33-142.4 33-48 0-84.6-32.8-142.8-32.8-57 0-117.8 35.8-156.4 96.8-54.2 86-45 248 42.8 386 31.4 49.4 73.4 104.8 128.4 105.4 0.4 0 0.6 0 1 0 47.8 0 62-32.2 127.8-32.6 0.4 0 0.6 0 1 0 64.8 0 77.8 32.4 125.4 32.4 0.4 0 0.6 0 1 0 55-0.6 99.2-62 130.6-111.2 22.6-35.4 31-53.2 48.4-93.2-127-49.6-147.4-234.8-21.8-305.8-38.4-49.4-92.2-78-143-78v0z M652.4 128c-40 2.8-86.6 29-114 63.2-24.8 31-45.2 77-37.2 121.6 1 0 2 0 3.2 0 42.6 0 86.2-26.4 111.6-60.2 24.6-32.2 43.2-77.8 36.4-124.6v0z"></path>
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


LogoApple.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoApple.propTypes = {
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


export default LogoApple
