import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBoat extends Component {

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
        <path d="M168.51 826h2.126c68.246 0 127.954-38.042 170.61-84.988 42.65 46.946 102.36 85.524 170.608 85.524s127.958-38.668 170.61-85.612c42.654 46.944 102.36 85.076 170.606 85.076h2.124l102.506-277.56c4.252-10.658 2.126-23.282-2.14-33.952-4.272-10.666-14.474-16.974-25.134-21.246l-76.426-24.976v-196.3c0-46.946-39.312-85.966-86.232-85.966h-127.958l-31.986-106h-191.938l-31.99 106h-127.958c-46.916 0-85.938 39.020-85.938 85.964v196.3l-76.148 25.066c-10.66 4.272-21.164 10.668-25.436 21.334-4.27 10.67-6.316 20.98-2.062 33.774l102.156 277.562zM256 272h512v168.522l-256-83.21-256 83.21v-168.522z M682.462 816.014c-104.506 72.534-236.712 72.516-341.216-0.018 0 0-115.276 128.004-213.264 128.004h42.654c59.708 0 117.292-23.452 170.61-51.188 106.63 55.468 234.586 55.456 341.216-0.014 53.318 27.738 110.9 51.202 170.608 51.202h42.656c-95.302 0-213.264-127.986-213.264-127.986z"></path>
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


MdBoat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBoat.propTypes = {
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


export default MdBoat
