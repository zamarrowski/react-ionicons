import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosSync extends Component {

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
        <path d="M986.8 512l-63.6 63.6c19.4-126-19.6-260.4-117-357.8-162.4-162.4-426-162.6-588.4 0-32.6 32.6-58.6 69-78 108l31 15.6c17.8-35.8 41.6-69.4 71.4-99.2 148.6-148.6 390.6-148.6 539.4 0.2 91.2 91.2 126.4 217.2 105.8 336l-68.2-66.4-21.6 21.6 106.4 106.4 105.4-105.4-22.6-22.6z M781.6 781.6c-148.6 148.6-390.6 148.8-539.4 0-91-91.2-126.2-217.8-105.6-335.8l66.2 66.2 22.6-22.6-105.4-105.4-105.4 105.4 22.6 22.6 63.6-63.6c-19.6 126.8 19.4 260.4 116.8 357.8 162.4 162.4 426 162.4 588.4 0 32.6-32.6 58.6-69.2 78-108l-31-15.6c-17.8 35.8-41.6 69.2-71.4 99z"></path>
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


IosSync.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSync.propTypes = {
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


export default IosSync
