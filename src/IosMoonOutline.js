import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMoonOutline extends Component {

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
        <path d="M428.2 174.6c0 0 0 0.2-0.2 0.2-25.6 53.4-38.6 111-38.6 170.8 0 105.6 41 205 115.6 279.6 74.6 74.8 173.6 115.8 279.2 115.8 6.4 0 12.8-0.2 19.2-0.4 0.2 0 0.2 0 0.4 0-67.2 78.4-164.4 123.2-267.4 123.2-94.2 0-182.6-36.8-249.2-103.4s-103.2-155.2-103.2-249.6c0-76.6 24-149.4 69.6-210.8 22-29.4 48.2-55.2 78-76.6 29.6-21.2 62.2-37.6 96.6-48.8zM493.8 128c-25.2 2.8-49.8 8-73.2 15.4-155.8 49.4-268.6 195.2-268.6 367.4 0 212.8 172 385.2 384.4 385.2 117.4 0 222.4-52.8 293-135.8 16.2-19 30.4-39.6 42.8-61.6-22.8 5.6-46.2 9-70 10.2-5.8 0.2-11.8 0.4-17.6 0.4-96.8 0-188-37.8-256.4-106.4-68.6-68.6-106.2-160-106.2-257 0-55.2 12.2-108.6 35.4-157 9.8-21.4 22-41.8 36.4-60.8v0z"></path>
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


IosMoonOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMoonOutline.propTypes = {
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


export default IosMoonOutline
