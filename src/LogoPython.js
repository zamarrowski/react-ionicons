import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoPython extends Component {

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
        <path d="M386.92 498.112c7.446-1.34 15.178-2.082 23.172-2.082l-6.244-0.030h207.646c9.006 0 17.612-1.234 25.816-3.508 38.74-10.726 66.69-45.074 66.69-87.326v-174.448c0-49.664-42.3-86.968-92.578-95.212-31.862-5.248-78.516-7.654-110.178-7.498-31.658 0.172-61.962 2.808-88.554 7.498-78.404 13.646-92.69 42.35-92.69 95.212v57.282h192v32h-254.36c-71.256 0-129.076 85.142-129.626 190.484-0.004 0.506-0.014 1.010-0.014 1.516 0 19.046 1.88 37.44 5.37 54.808 15.926 79.332 65.532 137.192 124.27 137.192h30.36v-91.87c0-53.654 40.292-103.466 98.92-114.018zM407.312 254.004c-19.184 0-34.768-15.57-34.768-34.806 0-19.328 15.548-35.040 34.768-35.040 19.148 0 34.798 15.71 34.798 35.040 0.002 19.236-15.618 34.806-34.798 34.806z M887.902 445.086c-18.342-73.044-65.836-125.086-121.542-125.086h-30.36v81.344c0 67.83-44.572 116.948-98.978 125.362-5.474 0.848-10.966 1.292-16.602 1.292h-207.718c-9.036 0-17.808 1.168-26.098 3.344-38.244 10.036-66.604 41.858-66.604 83.13v174.454c0 49.664 49.954 78.852 98.962 93.102 58.654 17.062 122.534 20.136 192.732 0 46.606-13.32 92.306-40.242 92.306-93.102v-52.926h-192v-32h254.36c50.48 0 94.214-42.73 115.628-105.098 8.96-26.094 14.012-55.62 14.012-86.902 0-23.536-2.866-46.076-8.098-66.914zM615.734 765.64c19.18 0 34.762 15.57 34.762 34.8 0 19.3-15.582 35.042-34.762 35.042-19.154 0-34.798-15.742-34.798-35.042-0-19.26 15.612-34.8 34.798-34.8z"></path>
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


LogoPython.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoPython.propTypes = {
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


export default LogoPython
