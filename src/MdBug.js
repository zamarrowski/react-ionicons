import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBug extends Component {

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
        <path d="M896 320h-134.8c-21.6-37.4-51.4-69.6-87.4-94l78.2-78.4-67.6-67.6-104.2 104.2c-22.2-5.4-44.6-8.2-68.2-8.2s-46 2.8-67.6 8.2l-104.8-104.2-67.6 67.6 77.8 78.2c-35.6 24.4-65.2 56.6-86.8 94h-135v96h100.4c-2.4 15.8-4.4 31.6-4.4 48v48h-96v96h96v48c0 16.4 2 32.2 4.4 48h-100.4v96h134.8c50 86 142.6 144 249.2 144s199.2-58 249.2-144h134.8v-96h-100.4c2.4-15.8 4.4-31.6 4.4-48v-48h96v-96h-96v-48c0-16.4-2-32.2-4.4-48h100.4v-95.8z"></path>
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


MdBug.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBug.propTypes = {
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


export default MdBug
