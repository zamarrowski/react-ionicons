import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdQrScanner extends Component {

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
        <path d="M192 248.4c0-13.8 10.4-24.4 24.4-24.4h135.6v-96h-133.6c-67 0-122.4 53.4-122.4 120.4v135.6h96v-135.6z M807.2 128h-135.2v96h134.4c13.8 0 25.6 10.4 25.6 24.4v135.6h96v-135.6c0-67-54-120.4-120.8-120.4z M832 773.6c0 13.8-10.4 24.4-24.4 24.4h-135.6v98h135.6c67 0 120.4-55.4 120.4-122.4v-133.6h-96v133.6z M216.4 798c-13.8 0-24.4-10.4-24.4-24.4v-133.6h-96v133.6c0 67 55.4 122.4 122.4 122.4h133.6v-98h-135.6z"></path>
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


MdQrScanner.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdQrScanner.propTypes = {
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


export default MdQrScanner
