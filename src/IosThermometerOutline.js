import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosThermometerOutline extends Component {

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
        <path d="M606 600.6v-443.8c0-51.4-42-93-94-93s-94 41.6-94 93v443.8c-58 33-97.8 95.6-97.8 167.4 0 106 86 192 192 192s192-86 192-192c0-71.8-40.2-134.6-98.2-167.4zM625 881.2c-30.2 30.2-70.2 46.8-113 46.8-88.4 0-160.2-71.8-160.2-160 0-57.6 31.6-111 81.6-139.6l16.6-9.2v-462.4c0-33.6 27.8-61 62-61s62 27.4 62 61v462.2l15.8 9.2c50.8 28.8 82 82.2 82 139.8 0 42.8-16.8 83-46.8 113.2z M544 644v-356c0-17.6-14.4-32-32-32s-32 14.4-32 32v356c-56 14.2-96.2 64.4-96.2 124 0 70.6 57.2 128 128 128s128.2-57.4 128.2-128c-0.2-59.6-42-109.8-96-124z"></path>
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


IosThermometerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosThermometerOutline.propTypes = {
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


export default IosThermometerOutline
