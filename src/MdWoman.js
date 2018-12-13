import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdWoman extends Component {

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
        <path d="M380.8 297.2l-58.8 208.6c-12.6 45.6 41.4 63.4 54.6 20.6l52.6-192.4h14.8l-90.4 338h84.4v254c0 46 64 46 64 0v-254h20v254c0 46 62 46 62 0v-254h86.8l-92.4-338h16.8l52.6 192.4c13 43.8 66.6 25 54.6-20.4l-58.8-208.8c-8-23.6-36.4-65.2-84-67.2h-94.6c-49.2 2-77.4 43.2-84.2 67.2z M585.2 138.4c0-41.2-32.8-74.6-73.2-74.6s-73.2 33.4-73.2 74.6c0 41.2 32.8 74.6 73.2 74.6s73.2-33.4 73.2-74.6z"></path>
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


MdWoman.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdWoman.propTypes = {
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


export default MdWoman
