import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdPhotos extends Component {

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
        <path d="M800 842.6v-533.2c0-47-38.4-85.4-85.4-85.4h-533.2c-47 0-85.4 38.4-85.4 85.4v533.4c0 47 38.4 85.4 85.4 85.4h533.4c46.8-0.2 85.2-38.6 85.2-85.6zM314.6 608l90.6 128 133.4-192 176 256h-533.2l133.2-192z M842.6 96h-533.2c-47 0-85.4 38.4-85.4 85.4v10.6h522.6c47 0 85.4 38.4 85.4 85.4v522.6h10.6c47 0 85.4-38.4 85.4-85.4v-533.2c0-47-38.4-85.4-85.4-85.4z"></path>
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


MdPhotos.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPhotos.propTypes = {
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


export default MdPhotos
