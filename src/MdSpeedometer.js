import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdSpeedometer extends Component {

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
        <path d="M256 832h512v96h-512v-96z M512 576c35.4 0 64-28.6 64-64s-28.6-64-64-64c-6 0-12 0.8-17.6 2.4l-133.4-97.4-8 7 97.8 133.4c-1.8 5.8-2.8 12-2.8 18.6 0 35.4 28.6 64 64 64z M512 96c-229.8 0-416 186.2-416 416 0 96.6 33 185.4 88.2 256h117.6l52.2-52.2-45.8-45.8-44.2 44c-39.8-48.6-64.2-108-70.4-170h62.4v-64h-62.4c6.2-62 30.6-121.4 70.4-170l44.2 44 45.8-45.8-44-44.2c48.6-39.8 108-64.2 170-70.4v62.4h64v-62.4c62 6.2 121.4 30.6 170 70.4l-44 44.2 45.8 45.8 44.2-44c39.8 48.6 64.2 108 70.4 170h-62.4v64h62.4c-6.2 62-30.6 121.4-70.4 170l-44.2-44-45.8 45.8 52.2 52.2h117.6c55.2-70.6 88.2-159.4 88.2-256-0-229.8-186.2-416-416-416z"></path>
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


MdSpeedometer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdSpeedometer.propTypes = {
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


export default MdSpeedometer
