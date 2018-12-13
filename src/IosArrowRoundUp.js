import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosArrowRoundUp extends Component {

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
        <path d="M528 752v-441.4l148.8 132.6c6.8 5.8 16.2 6.4 22.4 0.2s6.6-17 0.2-22.8l-176-160c-0.4-0.4-0.8-0.8-1.2-1-0.2-0.2-0.4-0.2-0.6-0.4s-0.4-0.4-0.8-0.6c-0.2-0.2-0.4-0.2-0.6-0.4s-0.4-0.2-0.6-0.4c-0.2-0.2-0.4-0.2-0.8-0.4-0.2-0.2-0.4-0.2-0.6-0.4-0.2 0-0.4-0.2-0.8-0.2-0.2 0-0.6-0.2-0.8-0.2s-0.4-0.2-0.8-0.2c-0.2 0-0.6-0.2-0.8-0.2s-0.6 0-0.8-0.2c-0.2 0-0.4 0-0.6 0-1-0.2-2.2-0.2-3.2 0-0.2 0-0.4 0-0.6 0s-0.6 0-0.8 0.2c-0.2 0-0.6 0.2-0.8 0.2s-0.4 0.2-0.8 0.2c-0.2 0-0.6 0.2-0.8 0.2s-0.4 0.2-0.8 0.2c-0.2 0-0.4 0.2-0.6 0.4s-0.4 0.2-0.8 0.4c-0.2 0.2-0.4 0.2-0.6 0.4s-0.4 0.2-0.6 0.4c-0.2 0.2-0.4 0.4-0.8 0.6-0.2 0.2-0.4 0.2-0.6 0.4-0.4 0.4-0.8 0.6-1.2 1l-176 160c-3.4 3.2-4.6 7.2-4.6 11.4 0 4 1.6 8.2 4.6 11.4 6.2 6.2 16 6 22.6 0l148.6-132.6v441.2c0 8.8 7.2 16 16 16 9 0 16.2-7.2 16.2-16z"></path>
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


IosArrowRoundUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArrowRoundUp.propTypes = {
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


export default IosArrowRoundUp
