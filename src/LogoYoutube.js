import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoYoutube extends Component {

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
        <path d="M1017.2 297.6c0-90-66.2-162.4-148-162.4-110.8-5.2-223.8-7.2-339.2-7.2-6 0-12 0-18 0s-12 0-18 0c-115.2 0-228.4 2-339.2 7.2-81.6 0-147.8 72.8-147.8 162.8-5 71.2-7.2 142.4-7 213.6-0.2 71.2 2 142.4 6.8 213.8 0 90 66.2 163 147.8 163 116.4 5.4 235.8 7.8 357.2 7.6 121.6 0.4 240.6-2 357.2-7.6 81.8 0 148-73 148-163 4.8-71.4 7-142.6 6.8-214 0.4-71.2-1.8-142.4-6.6-213.8zM414 707.8v-393l290 196.4-290 196.6z"></path>
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


LogoYoutube.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoYoutube.propTypes = {
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


export default LogoYoutube
