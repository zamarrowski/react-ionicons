import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosHand extends Component {

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
        <path d="M790 234c-23.2 0-42 18.4-42 41v218c0 9.6-9.2 17.2-19 17.2s-19-7.8-19-17.2v-321.4c0-22.6-18.8-41-42-41s-42 18.4-42 41v252.4c0 9.6-7.2 17.2-17 17.2s-17-7.8-17-17.2v-287c0-22.6-18.8-41-42-41s-42 18.4-42 41v321.6c0 9.6-8.2 17.2-18 17.2s-18-7.8-18-17.2v-252.6c0-22.6-20.8-41-44-41s-44 18.4-44 41v434.8l-51.8-47.2c-52.2-45.2-96.6-64.6-132.6-31.2-24.2 23.4 13.8 61.6 53.4 106 38.4 42.8 140 184.6 226.4 235.2 0 0 33.4 24.4 81.2 24.4s114.4 0 114.4 0c92.2 0 156.8-79 156.8-189v-464c0.2-22.4-18.6-41-41.8-41z"></path>
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


IosHand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHand.propTypes = {
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


export default IosHand
