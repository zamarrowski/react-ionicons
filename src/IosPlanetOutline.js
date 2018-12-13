import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPlanetOutline extends Component {

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
        <path d="M792.4 577.8c-2.2 9-4.6 18-7.8 26.8 11.6 9 22.8 17.8 33.6 26.6 72 58.2 118 114.4 106.4 114.4-15.8 1-55.2-2.2-142.2-34.2-24.4-9-50.4-19.4-77.6-31.2 39.4-45 63.2-104 63.2-168.4 0-141.4-114.6-256-256-256-114 0-210.4 74.4-243.6 177.2-24-17.2-46.4-34.2-66.6-50.4-72-58.2-95.2-90.4-102.4-104.4-8.6-14 65.2-1.8 152.2 30.2 13.6 5 27.8 10.4 42.2 16 5.6-6.6 11.6-13 17.8-19-131.8-55-228.4-75.4-245-45.8-18 31.8 61.6 113.4 193.6 206.8-2.6 14.8-4 29.8-4 45.4 0 141.4 114.6 256 256 256 64.6 0 123.6-23.8 168.6-63.4 148 65.2 259 91.4 277 59.6 16.4-29.4-50.6-101.4-165.4-186.2zM353.6 353.6c42.4-42.4 98.6-65.6 158.4-65.6s116 23.4 158.4 65.6c42.2 42.4 65.6 98.6 65.6 158.4 0 58.2-22 112.8-62 154.6-61.4-27.8-127.4-61.6-193.6-99-66-37.4-129-76.6-184.6-115 10.2-37 29.8-71 57.8-99zM512 736c-59.8 0-116-23.4-158.4-65.6-42.2-42.4-65.6-98.6-65.6-158.4 0-8.4 0.4-16.8 1.4-25 52.4 35.6 111.6 72.4 175.4 108.6s125.8 68 183.4 94.4c-39 29.8-86.4 46-136.2 46z"></path>
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


IosPlanetOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPlanetOutline.propTypes = {
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


export default IosPlanetOutline
