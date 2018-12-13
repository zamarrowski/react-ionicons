import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdAmericanFootball extends Component {

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
        <path d="M64 512c28.2 70 72.4 132 128 181.2v-362.4c-55.6 49.2-99.8 111.2-128 181.2z M960 512c-28.2-70-72.4-132-128-181.2v362.4c55.6-49.2 99.8-111.2 128-181.2z M512 210c-94.2 0-182 26.8-256 73v457.8c74 46.2 161.8 73 256 73s182-26.8 256-73v-457.8c-74-46.2-161.8-73-256-73zM704 480v128h-64v-64h-96v64h-64v-64h-96v64h-64v-192h64v64h96v-64h64v64h96v-64h64v64z"></path>
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


MdAmericanFootball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdAmericanFootball.propTypes = {
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


export default MdAmericanFootball
