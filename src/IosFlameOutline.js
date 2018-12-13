import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosFlameOutline extends Component {

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
        <path d="M447.8 96c51.4 269.2-193.4 263.8-191.8 534.8 1.4 222 210 297.2 256.2 297.2 46.4 0 227.8-48.2 253.8-297.2 21.4-202.8-144.8-416-318.2-534.8zM512.2 913.2c0 0-81.4-66.6-81.4-148.6s81.2-148.6 81.2-148.6 80.6 66.6 80.6 148.6c-0 82-80.4 148.6-80.4 148.6zM734.4 628c-5.6 53.8-19.4 101.2-41 141-17.4 32.4-40.2 59.6-67.4 81.2-13 10.4-26.6 18.8-39.6 25.6 20-29.6 38.2-68.2 38.2-111.2 0-94.4-87.6-167.8-91.4-170.8l-21.2-17.4-21.2 17.4c-3.8 3-92 76.4-92 170.8 0 40.6 16.4 77.2 35.2 106.2-14.8-8-30.4-18.2-46-30.6-29.4-23.6-52.8-51.2-69.4-82.4-20.2-37.6-30.4-80.4-30.8-127-0.8-118.8 48.2-177.8 100-240.2 49.2-59.2 99.6-120.2 99-226.8 65 53.6 122.6 117 165.6 183.6 62.8 96.6 91 193.6 82 280.6z"></path>
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


IosFlameOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFlameOutline.propTypes = {
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


export default IosFlameOutline
