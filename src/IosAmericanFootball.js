import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAmericanFootball extends Component {

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
        <path d="M757.21 266.79c-145.406-145.408-378.448-170.794-523.51-170.79-77.852 0.002-130.382 7.316-130.382 7.316s-59.968 430.454 163.472 653.894c145.408 145.408 378.444 170.79 523.506 170.79 77.854 0 130.386-7.316 130.386-7.316s59.972-430.452-163.472-653.894zM136.248 389.456l253.166-253.164c12.246 1.722 24.328 3.65 36.224 5.798l-283.588 283.586c-2.14-11.874-4.076-23.952-5.802-36.22zM534.624 670.39l57.376-57.376-45.254-45.256-57.376 57.376-22.626-22.624 57.376-57.376-45.254-45.254-57.376 57.376-22.626-22.624 57.376-57.376-45.256-45.256-57.376 57.376-22.626-22.624 57.378-57.378-45.256-45.254-57.376 57.376-22.628-22.626 135.768-135.766 22.626 22.628-57.376 57.376 45.256 45.254 57.376-57.376 22.626 22.626-57.376 57.376 45.256 45.256 57.376-57.376 22.628 22.626-57.376 57.376 45.254 45.254 57.376-57.376 22.626 22.624-57.376 57.376 45.256 45.256 57.376-57.376 22.624 22.626-57.376 57.376 45.254 45.254 57.376-57.376 22.628 22.624-135.766 135.768-22.626-22.626 57.376-57.376-45.256-45.256-57.376 57.376-22.63-22.628zM634.518 887.782c-12.242-1.726-24.318-3.66-36.208-5.812l283.648-283.65c2.142 11.876 4.076 23.954 5.802 36.222l-253.242 253.24z"></path>
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


IosAmericanFootball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAmericanFootball.propTypes = {
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


export default IosAmericanFootball
