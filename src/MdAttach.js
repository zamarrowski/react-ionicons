import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdAttach extends Component {

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
        <path d="M682.668 256v469.332c0 93.876-76.792 170.668-170.668 170.668-93.874 0-170.666-76.792-170.666-170.668v-490.664c0-59.73 46.936-106.668 106.666-106.668 59.728 0 106.666 46.938 106.666 106.668v490.666c0 23.458-19.21 42.666-42.668 42.666s-42.666-19.208-42.666-42.666v-405.334h-64v405.334c0.002 59.728 46.938 106.666 106.668 106.666s106.668-46.938 106.668-106.666v-490.666c0-93.866-76.792-170.668-170.668-170.668s-170.668 76.802-170.668 170.668v490.664c0.002 130.126 104.544 234.668 234.668 234.668s234.668-104.542 234.668-234.668v-469.332h-64z"></path>
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


MdAttach.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdAttach.propTypes = {
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


export default MdAttach
