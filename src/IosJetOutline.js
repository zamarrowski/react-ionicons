import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosJetOutline extends Component {

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
        <path d="M928 96c0 0-39.6 2.8-106.2 54.4-31 24-324.4 241.2-324.4 241.2l-319.4-15.8-82 73 204 102.4-16 20.2-163.2 8.2-13.4 67.2 121.2 94.4-53.4 107.2 107.4-53 94.6 121.2 67.2-13.4 8.2-163.2 20.2-15.8 102.4 203.8 73-81.8-15.8-319.4c0 0 217.2-293.4 241.2-324 51.8-67.2 54.4-106.8 54.4-106.8zM848.6 183.2l-248.4 333.8 15.6 317.6-33 37-81.4-161.8-17.6-34.8-62.6 49-7.8 152.8-23.4 4.6-98.4-126.2-45.6 22.4 22.8-45.6-126.2-98.4 4.6-23.4 152.8-7.8 49.6-62.2-35.2-17.6-161.8-81.4 37-33 317.8 15.6 334-248.2c9-7 17.4-13 25.2-18-5 7.8-11 16.4-18 25.6z"></path>
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


IosJetOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosJetOutline.propTypes = {
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


export default IosJetOutline
