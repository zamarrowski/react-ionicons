import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdStopwatch extends Component {

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
        <path d="M464 613.334h96v-261.334h-96v261.334z M815.34 340.542l61.572-61.572-67.884-67.882-61.57 61.572c-65.024-50.546-146.72-80.66-235.458-80.66-212.078 0-384 171.922-384 384s171.922 384 384 384 384-171.922 384-384c0-88.738-30.114-170.434-80.66-235.458zM724.132 788.132c-56.664 56.664-132 87.868-212.132 87.868s-155.47-31.204-212.132-87.868c-56.664-56.662-87.868-132-87.868-212.132s31.204-155.47 87.868-212.132c56.662-56.664 132-87.868 212.132-87.868s155.468 31.204 212.132 87.868c56.664 56.662 87.868 132 87.868 212.132s-31.204 155.47-87.868 212.132z M384 64h256v96h-256v-96z"></path>
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


MdStopwatch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdStopwatch.propTypes = {
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


export default MdStopwatch
