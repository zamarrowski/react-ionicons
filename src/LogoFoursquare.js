import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoFoursquare extends Component {

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
        <path d="M753.528 64c0 0-410.706 0-476.446 0-65.75 0-85.082 49.596-85.082 80.828 0 31.254 0 759.28 0 759.28 0 35.182 18.85 48.234 29.436 52.534 10.598 4.31 39.832 7.942 57.346-12.336 0 0 224.938-261.79 228.8-265.668 5.842-5.86 5.842-5.86 11.688-5.86 11.688 0 98.384 0 145.534 0 61.148 0 70.98-43.738 77.368-69.504 5.318-21.578 64.978-327.924 84.904-425.118 15.21-74.17-3.586-114.156-73.548-114.156zM742.172 603.274c5.318-21.578 64.978-327.924 84.904-425.118zM725.384 193.34l-19.998 103.468c-2.39 11.3-16.574 23.19-29.726 23.19-13.15 0-191.834 0-191.834 0-20.88 0.002-35.826 12.278-35.826 33.206v26.896c0 20.946 15.038 35.788 35.93 35.788 0 0 148.964 0 163.696 0 14.748 0 29.22 16.218 26.032 32.010-3.204 15.816-18.172 93.138-19.968 101.78-1.804 8.656-11.69 23.45-29.222 23.45-14.776 0-128.538 0-128.538 0-23.41 0-30.488 3.066-46.148 22.586-15.674 19.54-156.512 189.184-156.512 189.184-1.426 1.644-2.82 1.168-2.82-0.624v-592.482c0-13.368 11.586-29.046 28.958-29.046 0 0 367.426 0 382.346 0 14.070-0.002 27.222 13.262 23.63 30.594z"></path>
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


LogoFoursquare.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoFoursquare.propTypes = {
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


export default LogoFoursquare
