import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosWater extends Component {

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
        <path d="M704 296c-74-104-145-165-192-200-46.2 32-117.2 96.2-191.6 199.6s-125.8 215.6-128.2 340c0 2.4-0.2 5-0.2 7.4 0 36.6 7.8 71.6 21.8 103.6 8.2 18.6 18.4 36 30.4 52.4 57 77.6 155.6 128.8 267.6 128.8 176.8 0 320.2-127.6 320.2-284.8 0-126.6-54-243-128-347zM531.8 822c-31.6 0-65.4-2.8-91.8-14.8 174-27.2 238-91.2 279.6-244.4 10.4 22.4 12.4 47.4 12.4 73.6 0 102.4-89.6 185.6-200.2 185.6z"></path>
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


IosWater.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosWater.propTypes = {
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


export default IosWater
