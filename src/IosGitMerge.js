import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGitMerge extends Component {

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
        <path d="M768 448c-65.4 0-119.4 49.2-127 112.4-18.2 0-59.2-2.6-111-22.6-65.2-25.4-159.8-84.4-243-221.6 55.6-13.8 97-64.2 97-124.2 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8v386.6c-62.2 8.6-110 62-110 126.6 0 70.6 57.4 128 128 128s128-57.4 128-128c0-66-49.8-120.2-114-127.2v-355.2c85.4 133 181.2 191.8 248.4 218 55.6 21.6 100.2 24.8 122 24.8 0.2 0 0.4 0 0.8 0 8 62.8 61.8 111.6 127 111.6 70.6 0 128-57.4 128-128s-57.6-128-128.2-128zM160 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zM352 832c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM768 672c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"></path>
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


IosGitMerge.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGitMerge.propTypes = {
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


export default IosGitMerge
