import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBonfire extends Component {

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
        <path d="M544.4 701.2c-1.6-16.4-16.4-29.2-34.6-29.2-16.6 0-30.4 10.8-33.8 25v0l-33.8 185c-1 4.6-1.6 9.2-1.6 14 0 35.4 31 64 69.4 64s69.4-28.6 69.4-64c0-5.8-0.8-11.4-2.4-16.8l-32.6-178z M620.2 710v0 0z M808.6 780.6c-3.8-2.8-7.2-5.8-11.2-7.8l-137.8-95c-12.6-7.6-26-7.4-35.8 1.8-9 8.2-10.2 20.8-3.6 30.8l106 131.6c2 3 4.6 5.6 7.2 8.4 17 18.2 54.4 19.2 75 0 20.8-19.6 20.6-54.4 0.2-69.8z M764.4 670v0 0z M900.8 645l-129-4.6c-8.4-1.2-16 4.2-17.4 12-1.4 7.2 3 14.2 10.2 17.6v0c0 0 0.2 0 0.2 0l125 35.6c18 3.8 38.2-4.6 38.2-23.2-0-23.8-6.6-35-27.2-37.4z M259 670v0 0z M259 670v0c7.2-3.2 11.4-10.4 10.2-17.6-1.4-8-9-13.2-17.4-12l-129 4.6c-20.8 2.4-26.8 13.6-26.8 37.2 0 18.6 19.8 27.2 37.6 23.2l125-35.6c0.2 0.2 0.2 0.2 0.4 0.2z M364.4 677.6l-137.8 94.8c-4 2.2-7.8 4.8-11.2 7.8-20.8 19.2-20.8 50.2 0 69.2 20.8 19.2 54.2 19.2 75 0 2.8-2.6 5.2-5.4 7.2-8.4l106-131.2c6.6-10 5.4-22.4-3.6-30.6-9.6-9-25.2-9.6-35.6-1.6z M512 64c0 0 60.4 70.8 60.4 128.8 0 55.6-36.4 100.6-91.8 100.6-55.8 0-97.8-45-97.8-100.6l0.8-13.8c-54.4 64.6-87 152.4-87 243.6 0 119.2 96.4 215.6 215.6 215.6s215.6-96.4 215.6-215.6c-0.2-145.2-71.8-315.2-215.8-358.6zM504.2 557.4c-48 0-86.8-37.8-86.8-84.6 0-43.6 28.2-74.4 75.8-84 47.6-9.8 97-32.6 124.6-69.6 10.6 34.8 15.8 71.4 15.8 108.8 0 71.4-58 129.4-129.4 129.4z"></path>
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


MdBonfire.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBonfire.propTypes = {
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


export default MdBonfire
