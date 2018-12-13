import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCheckmarkCircleOutline extends Component {

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
        <path d="M341.436 432.964l-58.236 58.236 187.2 187.2 416-416-58.236-58.236-357.764 355.672-128.964-126.872zM844.8 512c0 183.036-149.766 332.8-332.8 332.8s-332.8-149.764-332.8-332.8 149.764-332.8 332.8-332.8c31.2 0 62.4 4.164 91.528 12.482l64.472-64.482c-47.836-20.8-99.836-31.2-156-31.2-228.8 0-416 187.2-416 416s187.2 416 416 416 416-187.2 416-416h-83.2z"></path>
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


MdCheckmarkCircleOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCheckmarkCircleOutline.propTypes = {
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


export default MdCheckmarkCircleOutline
