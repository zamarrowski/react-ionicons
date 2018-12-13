import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLogOut extends Component {

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
        <path d="M560 864h-384c-44.2 0-80-35.8-80-80v-544c0-44.2 35.8-80 80-80h384c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.4-21.6-48-48-48h-384c-26.4 0-48 21.6-48 48v544c0 26.4 21.6 48 48 48h384c26.4 0 48-21.6 48-48 0-8.8 7.2-16 16-16s16 7.2 16 16c0 44.2-35.8 80-80 80z M918.6 493.4l-169.2-168.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l151.2 148.8h-542c-8.8 0-16 7.2-16 16s7.2 16 16 16h542l-147.4 148.8c-6.2 6.2-6.2 16.4 0 22.6 3.2 3 7.2 4.6 11.4 4.6s8.2-1.4 11.4-4.6l165.2-164.8c12.6-12.6 12.6-28.8 0-41.2z"></path>
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


IosLogOut.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLogOut.propTypes = {
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


export default IosLogOut
