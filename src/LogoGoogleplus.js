import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoGoogleplus extends Component {

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
        <path d="M636.4 461.8l-3.2-14h-313.2v128.2h181.4c-18.8 90-96.8 127.2-168.2 127.2-52 0-100.4-15.6-136.6-50.6-37.2-36.2-57.8-86.2-57.8-140.8 0-54.2 19.6-103.6 55.2-139.2 35.4-35.4 84-50.8 137.4-50.8 61 0 99.8 27.6 116.2 42.2l96-95.4c-27-23.4-100.6-82.6-215.4-82.6 0 0 0 0 0 0-88.6 0-173.4 33.6-235.4 95.6-61 61-92.8 148.8-92.8 230.4s30 165.2 89.2 226.6c63.4 65.4 153.2 99.4 245.8 99.4 84.2 0 163.8-33 220.6-92.6 56-58.8 84.8-140.2 84.8-225.4-0.2-36-3.8-57.4-4-58.2z M1024 448h-114v-114h-82v114h-114v82h114v114h82v-114h114z"></path>
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


LogoGoogleplus.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoGoogleplus.propTypes = {
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


export default LogoGoogleplus
