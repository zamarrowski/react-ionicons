import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosArrowRoundDown extends Component {

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
        <path d="M496 272v441.4l-148.8-132.6c-6.8-5.8-16.2-6.4-22.4-0.2s-6.6 17-0.2 22.8l176 160c0.4 0.4 0.8 0.8 1.2 1 0.2 0.2 0.4 0.2 0.6 0.4s0.4 0.4 0.8 0.6c0.2 0.2 0.4 0.2 0.6 0.4s0.4 0.2 0.6 0.4c0.2 0.2 0.4 0.2 0.8 0.4 0.2 0.2 0.4 0.2 0.6 0.4 0.2 0 0.4 0.2 0.8 0.2 0.2 0 0.6 0.2 0.8 0.2s0.4 0.2 0.8 0.2c0.2 0 0.6 0.2 0.8 0.2s0.6 0 0.8 0.2c0.2 0 0.4 0 0.6 0 1 0.2 2.2 0.2 3.2 0 0.2 0 0.4 0 0.6 0s0.6 0 0.8-0.2c0.2 0 0.6-0.2 0.8-0.2s0.4-0.2 0.8-0.2c0.2 0 0.6-0.2 0.8-0.2s0.4-0.2 0.8-0.2c0.2 0 0.4-0.2 0.6-0.4s0.4-0.2 0.8-0.4c0.2-0.2 0.4-0.2 0.6-0.4s0.4-0.2 0.6-0.4c0.2-0.2 0.4-0.4 0.8-0.6 0.2-0.2 0.4-0.2 0.6-0.4 0.4-0.4 0.8-0.6 1.2-1l176-160c3.4-3.2 4.6-7.2 4.6-11.4 0-4-1.6-8.2-4.6-11.4-6.2-6.2-16-6-22.6 0l-148.8 132.8v-441.4c0-8.8-7.2-16-16-16s-16 7.2-16 16z"></path>
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


IosArrowRoundDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArrowRoundDown.propTypes = {
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


export default IosArrowRoundDown
