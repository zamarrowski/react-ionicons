import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosSearchOutline extends Component {

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
        <path d="M896.6 849.4l-226.6-226.8c41.6-52 66.6-118.2 66.6-190.2 0-168.2-136.2-304.4-304-304.4-168 0-304 136.4-304 304.4s136.2 304.4 304 304.4c72.4 0 138.8-25.4 191-67.6l226.4 226.8 46.6-46.6zM240.2 625.2c-51.4-51.4-79.6-119.8-79.6-192.6s28.4-141.2 79.6-192.6 119.8-80 192.4-80c72.6 0 141 28.4 192.4 79.8s79.6 119.8 79.6 192.6-28.4 141.2-79.6 192.6c-51.4 51.4-119.8 79.8-192.4 79.8-72.6 0.2-141-28.2-192.4-79.6z"></path>
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


IosSearchOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSearchOutline.propTypes = {
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


export default IosSearchOutline
