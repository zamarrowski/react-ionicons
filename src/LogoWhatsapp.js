import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoWhatsapp extends Component {

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
        <path d="M520.124 64c-242.914 0-439.856 195.402-439.856 436.464 0 82.46 23.064 159.58 63.118 225.374l-79.386 234.162 243.528-77.364c63.016 34.57 135.49 54.292 212.596 54.292 242.946 0 439.876-195.43 439.876-436.464 0-241.062-196.93-436.464-439.876-436.464zM738.848 666.22c-10.348 25.654-57.148 49.066-77.798 50.144-20.628 1.094-21.216 15.988-133.68-32.868-112.45-48.868-180.104-167.688-185.438-175.34-5.338-7.624-43.56-62.094-41.498-116.91 2.076-54.826 32.094-80.692 42.808-91.45 10.702-10.774 22.972-12.704 30.464-12.826 8.856-0.144 14.592-0.264 21.146-0.022 6.548 0.248 16.384-1.37 24.9 21.278 8.512 22.646 28.886 78.306 31.492 83.978 2.604 5.678 4.216 12.252 0.204 19.542-4.024 7.306-6.084 11.87-11.922 18.166-5.87 6.296-12.348 14.084-17.584 18.898-5.84 5.33-11.94 11.144-5.8 22.538 6.136 11.386 27.306 48.712 59.558 79.472 41.45 39.542 77.196 52.658 88.196 58.634 11.030 6.008 17.612 5.34 24.452-1.858 6.808-7.198 29.278-31.492 37.192-42.338 7.91-10.876 15.322-8.746 25.484-4.658 10.156 4.104 64.314 33.112 75.346 39.102 11.020 5.978 18.386 9.058 21.020 13.8 2.634 4.76 1.802 27.062-8.542 52.718z"></path>
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


LogoWhatsapp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoWhatsapp.propTypes = {
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


export default LogoWhatsapp
