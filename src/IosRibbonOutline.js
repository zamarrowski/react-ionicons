import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosRibbonOutline extends Component {

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
        <path d="M512 176c79.4 0 144 64.6 144 144s-64.6 144-144 144-144-64.6-144-144 64.6-144 144-144zM512 144c-97 0-176 79-176 176s79 176 176 176 176-79 176-176-79-176-176-176v0z M512 96c59.8 0 116 23.4 158.4 65.6s65.6 98.6 65.6 158.4-23.4 116-65.6 158.4-98.6 65.6-158.4 65.6-116-23.4-158.4-65.6-65.6-98.6-65.6-158.4 23.4-116 65.6-158.4 98.6-65.6 158.4-65.6zM512 64c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256v0z M301.2 560.8c58 50.8 132.8 79.2 210.8 79.2 4.8 0 9.4-0.2 14.2-0.4l-43.4 95.4-70.8 156-74-123.2h-155l118.2-207zM294.2 508.4l-166.2 291.6h192l96 160 96-211.6 67.2-148.4c-21.6 5.2-44.2 8-67.2 8-87 0-165-38.6-217.8-99.6v0z M722.8 560.8l118.2 207.2h-155.2l-9.4 15.6-64.4 107.6-48.6-107 78.2-171.6c29.4-13 57-30.6 81.2-51.8zM729.8 508.4c-30.2 34.8-68.6 62.4-112 79.6l-89.6 196.2 79.8 175.8 96-160h192l-166.2-291.6z"></path>
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


IosRibbonOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRibbonOutline.propTypes = {
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


export default IosRibbonOutline
