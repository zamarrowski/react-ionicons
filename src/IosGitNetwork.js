import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGitNetwork extends Component {

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
        <path d="M896 192c0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8h2v119.2l-240 118.2-240-118.2v-119c63.2-7.8 112-61.6 112-127 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8h2v139.2l256 126v120.6c-63.2 7.8-112 61.6-112 127 0 70.6 57.4 128 128 128s128-57.4 128-128c0-64.6-47.8-118-110-126.8h-2v-120.8l256-126v-139c63.2-8 112-61.8 112-127zM160 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zM608 831.6c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM768 288c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"></path>
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


IosGitNetwork.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGitNetwork.propTypes = {
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


export default IosGitNetwork
