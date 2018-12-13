import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTabletLandscape extends Component {

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
        <path d="M64 220v584c0 15.6 12.2 28 28 28h840c15.8 0 28-12.4 28-28v-584c0-15.6-12.2-28-28-28h-840c-15.8 0-28 12.6-28 28zM97.4 512.8c0-7.8 6.2-14 14-14s14 6.2 14 14c0 7.8-6.2 14-14 14-7.6 0-14-6.4-14-14zM940 512c0 15.4-13 28-28.2 28-15 0-28-12.4-28-28 0-15.4 12.8-28.2 28-28.2 15.2 0.2 28.2 12.8 28.2 28.2zM864 224v576h-704v-576h704z"></path>
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


IosTabletLandscape.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTabletLandscape.propTypes = {
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


export default IosTabletLandscape
