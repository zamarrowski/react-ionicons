import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosArrowRoundBack extends Component {

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
        <path d="M752 496h-441.4l132.6-148.8c5.8-6.8 6.4-16.2 0.2-22.4s-17-6.6-22.8-0.2l-160 176c-0.4 0.4-0.8 0.8-1 1.2-0.2 0.2-0.2 0.4-0.4 0.6s-0.4 0.4-0.6 0.8c-0.2 0.2-0.2 0.4-0.4 0.6s-0.2 0.4-0.4 0.6c-0.2 0.2-0.2 0.4-0.4 0.8-0.2 0.2-0.2 0.4-0.4 0.6 0 0.2-0.2 0.4-0.2 0.8 0 0.2-0.2 0.6-0.2 0.8s-0.2 0.4-0.2 0.8c0 0.2-0.2 0.6-0.2 0.8s0 0.6-0.2 0.8c0 0.2 0 0.4 0 0.6-0.2 1-0.2 2.2 0 3.2 0 0.2 0 0.4 0 0.6s0 0.6 0.2 0.8c0 0.2 0.2 0.6 0.2 0.8s0.2 0.4 0.2 0.8c0 0.2 0.2 0.6 0.2 0.8s0.2 0.4 0.2 0.8c0 0.2 0.2 0.4 0.4 0.6s0.2 0.4 0.4 0.8c0.2 0.2 0.2 0.4 0.4 0.6s0.2 0.4 0.4 0.6c0.2 0.2 0.4 0.4 0.6 0.8 0.2 0.2 0.2 0.4 0.4 0.6 0.4 0.4 0.6 0.8 1 1.2l160 176c3.2 3.4 7.2 4.6 11.4 4.6 4 0 8.2-1.6 11.4-4.6 6.2-6.2 6-16 0-22.6l-132.8-148.8h441.4c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
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


IosArrowRoundBack.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArrowRoundBack.propTypes = {
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


export default IosArrowRoundBack
