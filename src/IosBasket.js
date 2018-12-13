import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBasket extends Component {

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
        <path d="M800 448v-192c0-70.4-57.6-128-128-128h-320c-70.4 0-128 57.6-128 128v192h-160l105 388.6c9.4 34 40.8 59.4 78.2 59.4h529.4c37.4 0 68.8-25 78.6-59l104.8-389h-160zM256 256c0-25.6 10-49.6 28.2-67.8s42.2-28.2 67.8-28.2h320c25.6 0 49.6 10 67.8 28.2s28.2 42.2 28.2 67.8v192h-512v-192zM883.8 608h-147.8v128h113.4l-8.6 32h-104.8v96h-32v-96h-176v96h-32v-96h-176v96h-32v-96h-104.4l-8.6-32h113v-128h-147.6l-8.6-32h156.2v-96h32v96h176v-96h32v96h176v-96h32v96h156.4l-8.6 32z M528 608h176v128h-176v-128z M320 608h176v128h-176v-128z"></path>
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


IosBasket.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBasket.propTypes = {
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


export default IosBasket
