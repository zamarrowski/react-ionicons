import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosFlagOutline extends Component {

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
        <path d="M736 224c-22 2.8-49.8 7-79.4 7-46.2 0-88-11.4-130.4-20.4-43-9.2-87.4-18.6-134.4-18.6-93.8 0-125.6 20.2-128.8 22.4l-6.8 4.8v612.8h32v-286.6c12-5 43.6-13.8 103.8-13.8 43.6 0 84.4 16.6 127.8 26 44 9.4 89.6 19.2 139 19.2 29.4 0 55.4-4 77.4-6.6 12-1.4 22.6-2.8 32-4.4v-346.8c-9.4 1.8-20.2 3.4-32.2 5zM736 538c-22 2.8-47.8 7-77.4 7-46.2 0-90-9.4-132.4-18.4-43-9.2-87.2-26.6-134.2-26.6-51.4 0-83.8 6-103.8 12v-274.6c12-5 43.8-13.6 103.8-13.6 43.6 0 84.4 8.6 127.8 18 44 9.4 87.6 21.2 137 21.2 29.4 0 57.4-4 79.4-6.6l-0.2 281.6z"></path>
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


IosFlagOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFlagOutline.propTypes = {
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


export default IosFlagOutline
