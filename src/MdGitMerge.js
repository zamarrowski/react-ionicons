import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdGitMerge extends Component {

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
        <path d="M768 448c-47.4 0-88.8 25.8-110.8 64-36.6-1-104.8-8.2-151-36.2-64.6-38.8-129.2-106.2-174-181 31.4-23.4 52-60.6 52-102.8 0-70.6-57.4-128-128-128s-128.2 57.4-128.2 128c0 47.4 25.8 88.6 64 110.8v418.4c-38.2 22.2-64 63.4-64 110.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-47.4-25.8-88.6-64-110.8v-232.8c37.4 38.8 78.2 72 120 97.2 77.6 46.8 174 53.8 217.2 54.6 22.2 38.2 63.4 63.8 110.8 63.8 70.6 0 128-57.4 128-128s-57.4-128-128-128zM176 192c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zM336 832c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zM768 656c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path>
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


MdGitMerge.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGitMerge.propTypes = {
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


export default MdGitMerge
