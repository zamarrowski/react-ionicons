import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdInfinite extends Component {

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
        <path d="M869.4 376c-37.6-36-87.6-56-141-56-53.2 0-103.2 19.8-140.8 55.8l-35.2 31.8 66.2 64.2 34.2-31c20.2-19.2 47-30 75.4-30s55.2 10.6 75.4 29.8c20 19.2 30.8 44.6 30.8 71.6s-11 52.2-30.8 71.2c-20.2 19.2-47 30-75.4 30s-55.2-10.6-75.4-29.8l-216.4-207.6c-37.8-36-87.8-56-140.8-56-53.4 0-103.4 19.8-141 56-37.8 36.2-58.6 84.4-58.6 136 0 51.4 20.8 99.8 58.6 136 37.6 36 87.6 56 141 56s103.4-19.8 140.8-56l75.6-72.2 75.4 72.2c37.8 36 87.8 56 140.8 56 53.4 0 103.4-19.8 140.8-55.8 38-36.2 58.8-84.4 58.8-136 0.2-51.6-20.6-100-58.4-136.2zM371 583.4c-20.2 19.2-47 30-75.4 30s-55.2-10.6-75.4-29.8c-20-19.2-30.8-44.6-30.8-71.6s11-52.2 30.8-71.2c20.2-19.2 47-30 75.4-30s55.2 10.6 75.4 29.8l74.8 71.6-74.8 71.2z"></path>
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


MdInfinite.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdInfinite.propTypes = {
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


export default MdInfinite
