import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosShuffle extends Component {

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
        <path d="M886.6 651.4l-71.2-70.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l53.2 52.8h-198l-251.6-314.4c-3-3.6-7.8-5.6-12.6-5.6h-239.8c-8.8 0-16 7.2-16 16s7.2 16 16 16h232.6l114.6 144-114.6 144h-232.6c-8.8 0-16 7.2-16 16s7.2 16 16 16h240c4.8 0 9.2-2 12.2-5.6l115.8-145.4 115.8 145.4c3 3.6 7.6 5.6 12.2 5.6h210l-53.2 52.8c-6.2 6.2-6.2 16.4 0 22.6 3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6l67.2-66.8c12.4-12.6 12.4-32.8-0.2-45.2z M647.4 368h198.4l-53.2 52.8c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l71.2-70.8c12.4-12.4 12.4-32.6 0-45l-67.2-66.8c-3.2-3.2-7.2-4.6-11.4-4.6s-8.2 1.6-11.4 4.6c-6.2 6.2-6.2 16.4 0 22.6l53.2 52.8h-209.6c-4.8 0-9.2 2-12.2 5.6l-94.6 120.4 21 24.8 93.2-119z"></path>
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


IosShuffle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosShuffle.propTypes = {
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


export default IosShuffle
