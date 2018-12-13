import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosEaselOutline extends Component {

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
        <path d="M928 192v512h-832v-512h832zM928 160h-832c-17.6 0-32 14.4-32 32v512c0 17.6 13.8 32 31.6 32h832.4c17.6 0 32-14.4 32-32v-512c0-17.6-14.4-32-32-32v0z M768 768l64 160h33.2l-65.2-160z M225.2 768l-65.2 160h33.2l64-160z M496 768h32v96h-32v-96z M864 256v384h-704v-384h704zM896 224h-768v448h768v-448z M512 96c-17.6 0-32 14.4-32 32h64c0-17.6-14.4-32-32-32z"></path>
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


IosEaselOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosEaselOutline.propTypes = {
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


export default IosEaselOutline
