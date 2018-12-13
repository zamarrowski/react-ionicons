import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoFacebook extends Component {

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
        <path d="M853.6 128h-683.2c-23.4 0-42.4 19-42.4 42.4v683.2c0 23.4 19 42.4 42.4 42.4h341.6v-304h-91.8v-112h91.8v-82.8c0-99.2 68.8-153.2 157.4-153.2 42.4 0 88 3.2 98.6 4.6v103.6h-70.6c-48.2 0-57.4 22.8-57.4 56.4v71.4h114.8l-15 112h-99.8v304h213.6c23.4 0 42.4-19 42.4-42.4v-683.2c0-23.4-19-42.4-42.4-42.4z"></path>
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


LogoFacebook.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoFacebook.propTypes = {
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


export default LogoFacebook
