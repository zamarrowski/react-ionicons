import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosStopwatchOutline extends Component {

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
        <path d="M795.2 293.4l-3.6-3.4h36.8l17 15.6 45-45.6-81.6-80.6-46.4 44.6 17.6 18.4v37.2l-10-9.4c-62.6-56.6-140-90.4-226-97.8v-76.4h-64v76h-4c-87.4 6-170 45-232 106v-35.6l17.8-18.4-45.8-44.4-81.6 80.4 45 45.6 17-15.6h35.6c-0.6 0-1.4 1.4-2 2.2-65.6 70.2-102 161.8-102 257 0 208.8 172.2 378.8 384.2 378.8 211.6 0 383.8-169.8 383.8-378.6 0-95.2-36-186.2-100.8-256zM512.6 891.4c-191 0-346.2-153.4-346.2-341.8 0-188.6 155.4-341.8 346.2-341.8 191 0 346.2 153.4 346.2 341.8 0.2 188.4-155.2 341.8-346.2 341.8z M528 514.6v-258.6h-32v258.8c-25 8.6-48 33-48 60.6 0 29.4 20 54 48 61l16 35.6 16-35.6c28-7 48-31.6 48-61 0-29-21-53.4-48-60.8z"></path>
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


IosStopwatchOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosStopwatchOutline.propTypes = {
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


export default IosStopwatchOutline
