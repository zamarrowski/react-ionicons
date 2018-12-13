import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoInstagram extends Component {

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
        <path d="M672 511.666c0 88.366-71.634 160-160 160s-160-71.634-160-160c0-88.366 71.634-160 160-160s160 71.634 160 160z M355.61 353.774c42.308-42.308 98.558-65.858 158.39-65.858s116.082 23.674 158.39 65.982c26.844 26.844 46.022 59.102 56.464 95.102h168.146v-226c0-53.020-40.98-94-94-94h-576c-53.020 0-98 40.98-98 94v226h170.144c10.444-36 29.622-68.382 56.466-95.226zM833 295.4c0 14.138-11.46 25.6-25.6 25.6h-76.8c-14.138 0-25.6-11.46-25.6-25.6v-76.8c0-14.138 11.46-25.6 25.6-25.6h76.8c14.138 0 25.6 11.46 25.6 25.6v76.8z M672.39 670.558c-42.308 42.308-98.558 65.358-158.39 65.358s-116.082-22.924-158.39-65.232c-42.23-42.23-65.518-99.684-65.606-157.684h-161.004v286c0 53.020 44.98 98 98 98h576c53.020 0 94-44.98 94-98v-286h-159.004c-0.086 58-23.374 115.328-65.606 157.558z"></path>
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


LogoInstagram.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoInstagram.propTypes = {
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


export default LogoInstagram
