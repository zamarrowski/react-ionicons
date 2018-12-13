import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPulse extends Component {

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
        <path d="M896 546.002c-42.54 0-78.592 27.998-91.192 65.998h-77.714l-56.722-170.834c-4.352-13.106-16.606-21.912-30.366-21.912-0.224 0-0.448 0-0.67 0.008-14.032 0.29-26.234 9.688-30.098 23.176l-88.968 310.524-104.706-628.216c-2.494-14.96-14.898-28.746-31.564-28.746s-27.386 11.552-31.050 26.27l-121.958 489.73h-198.992v63.998h224c14.696 0 27.5-10.006 31.050-24.268l90.736-364.354 102.648 615.88c2.458 14.754 14.794 23.84 29.728 24.688 0.616 0.036 1.228 0.056 1.838 0.056 14.194 0 26.812-7.402 30.762-21.188l99.488-347.234 31.378 94.504c4.346 13.086 16.584 21.916 30.372 21.916h102.216c13.73 36 48.738 62.002 89.784 62.002 53.022 0 96-44.984 96-98 0-53.018-42.978-93.998-96-93.998z"></path>
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


IosPulse.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPulse.propTypes = {
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


export default IosPulse
