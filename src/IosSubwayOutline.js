import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosSubwayOutline extends Component {

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
        <path d="M694.4 928h45.6l-98.6-96h-45.6l32.2 32h-232l32.2-32h-45.6l-98.6 96h45.6l34.2-32h296.4z M400 144h224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-224c-8.8 0-16-7.2-16-16s7.2-16 16-16z M688 128c53 0 96 43 96 96v448c0 53-43 96-96 96h-352c-53 0-96-43-96-96v-448c0-53 43-96 96-96h352zM336 512h356c35.2 0 64-28.8 64-64v-192c0-35.2-28.6-64-64-64h-356c-35.2 0-64 28.8-64 64v192c0 35.2 28.6 64 64 64zM673 751c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88zM353 751c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88zM688 96h-352c-70.6 0-128 57.4-128 128v448c0 70.6 57.4 128 128 128h352c70.6 0 128-57.4 128-128v-448c0-70.6-57.4-128-128-128v0zM336 480c-17.6 0-32-14.4-32-32v-192c0-17.6 14.4-32 32-32h356c17.6 0 32 14.4 32 32v192c0 17.6-14.4 32-32 32h-356zM673 719c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56v0zM353 719c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56v0z"></path>
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


IosSubwayOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSubwayOutline.propTypes = {
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


export default IosSubwayOutline
