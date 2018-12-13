import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosSubway extends Component {

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
        <path d="M688 96h-352c-70.4 0-128 57.6-128 128v448c0 70.4 57.6 128 128 128h352c70.4 0 128-57.6 128-128v-448c0-70.4-57.6-128-128-128zM400 144h224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-224c-8.8 0-16-7.2-16-16s7.2-16 16-16zM336 752c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56zM688 752c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56zM768 448c0 17.6-14.4 32-32 32h-447.6c-17.6 0-32.4-14.4-32.4-32v-191.6c0-17.6 14.8-32.4 32.4-32.4h447.6c17.6 0 32 14.8 32 32.4v191.6z M738.4 928h45.6l-98.6-96h-45.6l32.2 32h-320l32.2-32h-45.6l-98.6 96h45.6l34.2-32h384.4z"></path>
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


IosSubway.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSubway.propTypes = {
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


export default IosSubway
