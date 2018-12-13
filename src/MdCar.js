import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCar extends Component {

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
        <path d="M806.416 234.666c-8.542-25.604-32-42.666-59.75-42.666h-469.332c-27.75 0-51.208 17.062-59.75 42.666l-89.584 234.668v320c0 23.458 19.208 42.666 42.666 42.666h42.668c23.458 0 42.666-19.208 42.666-42.666v-21.334h512v21.334c0 23.458 19.208 42.666 42.666 42.666h42.668c23.458 0 42.666-19.208 42.666-42.666v-320l-89.584-234.668zM277.334 640c-36.25 0-64-27.73-64-64s27.75-64 64-64 64 27.732 64 64-27.75 64-64 64zM746.666 640c-36.25 0-64-27.73-64-64s27.75-64 64-64 64 27.732 64 64-27.75 64-64 64zM213.334 426.666l64-170.666h469.332l64 170.666h-597.332z"></path>
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


MdCar.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCar.propTypes = {
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


export default MdCar
