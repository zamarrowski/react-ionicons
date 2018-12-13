import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGitBranch extends Component {

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
        <path d="M832 320c0-70.6-57.4-128-128-128s-128 57.4-128 128c0 65.2 48.8 119 112 127v1c0 46-19.8 84.8-59 115-42.6 33-97.4 48.2-135.8 55-86.4 15.6-128.2 66.6-143.2 89.4-5.2-1.2-10.6-2.2-16-2.8v-385.4c64.2-7 114-61.2 114-127.2 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8v386.6c-62.2 8.8-110 62.2-110 126.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-48.6-27.2-91-67.2-112.6 14.6-20.2 50.2-57.4 118-69.8 42-7.6 102-24.4 149.6-61.2 46.8-36.2 71.4-84.6 71.4-140.4v-1c63.4-8.2 112.2-62 112.2-127.2zM224 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zM416 832c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM704 416c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"></path>
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


IosGitBranch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGitBranch.propTypes = {
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


export default IosGitBranch
