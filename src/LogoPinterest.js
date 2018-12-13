import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoPinterest extends Component {

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
        <path d="M512 64c-247.4 0-448 200.6-448 448 0 183.4 110.4 341 268.2 410.4-1.2-31.2-0.2-68.8 7.8-102.8 8.6-36.4 57.6-244.2 57.6-244.2s-14.4-28.6-14.4-70.8c0-66.4 38.4-116 86.4-116 40.8 0 60.4 30.6 60.4 67.2 0 41-26.2 102.2-39.6 159-11.2 47.6 23.8 86.2 70.8 86.2 84.8 0 142-109 142-238.2 0-98.2-66.2-171.6-186.4-171.6-135.8 0-220.6 101.4-220.6 214.6 0 39 11.6 66.6 29.6 87.8 8.2 9.8 9.4 13.8 6.4 25-2.2 8.2-7 28-9.2 36-3 11.4-12.2 15.4-22.4 11.2-62.6-25.6-91.8-94-91.8-171.2 0-127.2 107.4-279.8 320.2-279.8 171 0 283.6 123.8 283.6 256.6 0 175.8-97.8 307-241.8 307-48.4 0-93.8-26.2-109.4-55.8 0 0-26 103.2-31.6 123.2-9.4 34.6-28 69-45 96 40.2 11.8 82.8 18.4 127 18.4 247.4 0 448-200.6 448-448 0.2-247.6-200.4-448.2-447.8-448.2z"></path>
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


LogoPinterest.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoPinterest.propTypes = {
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


export default LogoPinterest
