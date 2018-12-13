import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBus extends Component {

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
        <path d="M704.2 864c0 21-2.2 32 6.6 32s100.8 0 110.2 0 8.2-7.6 11-64c-17 37.4-48 32-127.8 32z M192 832c3 56.8 1.6 64 11 64s101.4 0 110.2 0c8.8 0 6.6-11 6.6-32-79.8 0-100.8 6-127.8-32z M768 128h-512c-35.2 0-64 28.8-64 64v0 560c0 44 36 80 80 80h480c44 0 80-36 80-80v-560c0-35.2-28.8-64-64-64zM320 752c-26.6 0-48-21.4-48-48s21.4-48 48-48 48 21.4 48 48-21.4 48-48 48zM496 576h-239.6c-17.6 0-32.4-14.4-32.4-32v-255.6c0-17.6 14.8-32.4 32.4-32.4h239.6v320zM704 752c-26.6 0-48-21.4-48-48s21.4-48 48-48 48 21.4 48 48-21.4 48-48 48zM800 544c0 17.6-14.4 32-32 32h-240v-320h240c17.6 0 32 14.8 32 32.4v255.6zM768 224h-512c-17.6 0-32-14.4-32-32s14.4-32 32-32h512c17.6 0 32 14.4 32 32s-14.4 32-32 32z"></path>
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


IosBus.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBus.propTypes = {
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


export default IosBus
