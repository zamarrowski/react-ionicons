import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGitCommit extends Component {

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
        <path d="M944 496h-176c-0.2 0-0.4 0-0.6 0-8.2-134-119.4-240-255.4-240s-247.2 106-255.4 240c-0.2 0-0.4 0-0.6 0h-176c-8.8 0-16 7.2-16 16s7.2 16 16 16h176c0.2 0 0.4 0 0.6 0 8.2 134 119.4 240 255.4 240s247.2-106 255.4-240c0.2 0 0.4 0 0.6 0h176c8.8 0 16-7.2 16-16s-7.2-16-16-16zM670.4 670.4c-42.4 42.4-98.6 65.6-158.4 65.6s-116-23.2-158.4-65.6c-42.2-42.4-65.6-98.6-65.6-158.4s23.4-116 65.6-158.4c42.4-42.2 98.6-65.6 158.4-65.6s116 23.4 158.4 65.6c42.2 42.4 65.6 98.6 65.6 158.4s-23.4 116-65.6 158.4z"></path>
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


IosGitCommit.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGitCommit.propTypes = {
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


export default IosGitCommit
