import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBookmarks extends Component {

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
        <path d="M810.4 128h-42c30 11.4 45.6 41.2 45.6 85.4v597.4c0 44.2-14 74.6-45.6 85.4h42c47.4 0 85.6-38.4 85.6-85.4v-597.4c0-47-38.2-85.4-85.6-85.4z M691 128.4c-2.8-0.2-5.6-0.4-8.4-0.4h-469.2c-47 0-85.4 38.4-85.4 85.4v597.4c0 47 38.4 85.4 85.4 85.4h469.4c2.8 0 5.6-0.2 8.4-0.4 43-4.2 77-40.8 77-85v-597.4c-0.2-44.2-34.2-80.8-77.2-85zM416 512l-112-64-112 64v-320h224v320z"></path>
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


MdBookmarks.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBookmarks.propTypes = {
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


export default MdBookmarks
