import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTrashOutline extends Component {

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
        <path d="M800 226.6h-160v-40c0-32.4-26.2-58.6-58.6-58.6h-139c-32.2 0-58.4 26.2-58.4 58.6v40h-160v29.4h42.2l47.2 581.4c0 32.4 26.2 58.6 58.6 58.6h282c32.4 0 58.6-26.2 58.6-58.6l46.6-581.4h40.8v-29.4zM413.2 186.6c0-16.2 13.2-29.4 29.2-29.4h139c16.2 0 29.2 13.2 29.2 29.4v40h-197.4v-40zM683.2 835.8v1.6c0 16.2-13.2 29.4-29.2 29.4h-282c-16.2 0-29.2-13.2-29.2-29.4v-1.6l-47.4-579.8h434.4l-46.6 579.8z M498 320h28v482h-28v-482z M640 320h-29.2l-21.4 482h29.2z M413 320h-29l21.4 482h29.2z"></path>
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


IosTrashOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTrashOutline.propTypes = {
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


export default IosTrashOutline
