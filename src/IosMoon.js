import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMoon extends Component {

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
        <path d="M493.8 128c-25.2 2.8-49.8 8-73.2 15.4-155.8 49.4-268.6 195.2-268.6 367.4 0 212.8 172 385.2 384.4 385.2 117.4 0 222.4-52.8 293-135.8 16.2-19 30.4-39.6 42.8-61.6-22.8 5.6-46.2 9-70 10.2-5.8 0.2-11.8 0.4-17.6 0.4-96.8 0-188-37.8-256.4-106.4-68.6-68.6-106.2-160-106.2-257 0-55.2 12.2-108.6 35.4-157 9.8-21.4 22-41.8 36.4-60.8v0z"></path>
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


IosMoon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMoon.propTypes = {
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


export default IosMoon
