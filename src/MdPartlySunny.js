import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdPartlySunny extends Component {

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
        <path d="M496.062 233.62l49.356-49.356 38.466 38.466-49.356 49.356-38.466-38.466z M352 251.4c-90.6 0-164.6 74-164.6 164.6 0 35 11 67.4 29.8 94 30.6-26 67.8-45.2 109.4-55.2l26.4-33.2c27.2-34.2 61.4-60.4 101.6-77.8 12.2-5.2 24.8-9.6 38-13.2-29-47.4-81.2-79.2-140.6-79.2z M324 128h56v82h-56v-82z M64 388h82v56h-82v-56z M163.2 553.6l-1.6-1.6-49.4 49.4 38.4 38.4 49.4-49.4z M158.578 184.26l49.356 49.356-38.466 38.466-49.356-49.356 38.466-38.466z M811.2 577.2c-21.8-110.4-118.8-193.2-235.2-193.2-68 0-130.2 23.8-173 77.6 58.8 4.4 113.4 26 155.6 67.8 31.2 31.2 53.2 69.2 64.2 110.6h-57.4c-26.2-74.6-96-128-181.2-128-10.2 0-24.6 1.2-35.4 3.4-91.6 18.8-156.8 94.6-156.8 188.6 0 106 86 192 192 192h416c88.4 0 160-71.6 160-160 0-84.4-65.6-153-148.8-158.8z"></path>
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


MdPartlySunny.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPartlySunny.propTypes = {
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


export default MdPartlySunny
