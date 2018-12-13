import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosRibbon extends Component {

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
        <path d="M512 576c141.4 0 256-114.6 256-256s-114.6-256-256-256-256 114.6-256 256 114.6 256 256 256zM512 144c97 0 176 79 176 176s-79 176-176 176-176-79-176-176 79-176 176-176z M512 464c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144z M512 608c-87 0-165-38.6-217.8-99.6l-166.2 291.6h192l96 160 96-211.6 67.2-148.4c-21.6 5.2-44 8-67.2 8z M729.8 508.4c-30.2 34.8-68.6 62.4-112 79.6l-89.6 196.2 79.8 175.8 96-160h192l-166.2-291.6z"></path>
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


IosRibbon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRibbon.propTypes = {
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


export default IosRibbon
