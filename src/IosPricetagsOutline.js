import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPricetagsOutline extends Component {

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
        <path d="M896 128v-64h-320l-512 576 320 320 46.942-47.808 49.058 47.808 480-544v-288h-64zM384 914.742l-275.22-274.742 480.462-544h274.758v274.754l-433.11 495.98-22.68 22.726-24.21 25.282zM928 402.754l-448 511.988-26.364-25.3 442.364-505.442v-224h32v242.754z M704 320c35.29 0 64-28.71 64-64s-28.71-64-64-64-64 28.71-64 64 28.71 64 64 64zM704 224c17.672 0 32 14.326 32 32s-14.328 32-32 32-32-14.326-32-32 14.328-32 32-32z"></path>
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


IosPricetagsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPricetagsOutline.propTypes = {
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


export default IosPricetagsOutline
