import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosHeadset extends Component {

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
        <path d="M816 520h-48v-95.6c0-140.8-115.2-256-256-256v0 0c-140.8 0-256 115.2-256 256v95.6h-48c-79.2 0-144 64.8-144 144v31.6c0 79.2 64.8 144.4 144 144.4h48c0 8 7.2 15.8 16 15.8s16-7.4 16-16.2v-413.6c16.4 0 42 0 48 0 8.8 0 16-8 16-16.8 0-80 77.4-144.8 160-144.8s160 64.6 160 144.6c0 8.8 7.2 17.2 16 17.2 5.8 0 31 0 48 0v413.6c0 8.8 7.2 16.2 16 16.2s16-7.8 16-15.8h48c79.2 0 144-65.2 144-144.4v-31.8c0-79.2-64.8-144-144-144z"></path>
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


IosHeadset.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHeadset.propTypes = {
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


export default IosHeadset
