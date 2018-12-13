import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPersonAdd extends Component {

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
        <path d="M832 306h-50v-50h-28v50h-50v28h50v50h28v-50h50z M726.6 727.8c-25.8-9.2-62.8-12.4-86.4-17.6-13.6-3-33.4-10.6-40-18.4-6.6-8-2.6-81.8-2.6-81.8s12.2-19.2 18.8-36c6.6-16.8 13.8-62.8 13.8-62.8s13.6 0 18.4-23.8c5.2-26 13.2-36.8 12.2-56.2-1-18-10.4-19-11.4-19 0 0 0 0 0 0s9.8-27.2 11.2-84.8c1.6-68.2-50.6-135.4-148.6-135.4s-150 67-148.6 135.2c1.2 57.4 11.2 84.8 11.2 84.8s0 0 0 0c-1 0-10.4 1-11.4 19-1 19.4 7.2 29.8 12.2 55.8 4.8 23.8 18.4 24 18.4 24s7.2 46.2 13.8 63c6.6 17 18.8 36 18.8 36s4 73.8-2.6 81.8c-6.6 8-26.4 15.4-40 18.4-23.8 5.2-60.6 8.6-86.4 17.8s-105.4 40.2-105.4 104.2h640c0-64-79.6-95-105.4-104.2z"></path>
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


IosPersonAdd.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPersonAdd.propTypes = {
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


export default IosPersonAdd
