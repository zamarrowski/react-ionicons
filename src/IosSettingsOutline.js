import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosSettingsOutline extends Component {

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
        <path d="M378.4 166c13.4 17 29.8 31.6 48.2 42.8 26.6 16.4 56 25 85.4 25s58.8-8.6 85.4-25c18.4-11.2 34.6-25.8 48.2-42.8 9.4 3.4 18.6 7.2 27.6 11.4-6.4 49.6 8.6 93 44.6 128.8 35.8 35.8 74.8 53.8 116 53.8 4.2 0 8.4-0.2 12.6-0.6 4.2 9 8 18.4 11.6 27.8-43.8 32.8-67.8 76.4-67.8 124.6 0 48.4 23.8 91.8 67.6 124.6-3.4 9.4-7.4 18.8-11.6 27.8-4.2-0.4-8.4-0.6-12.4-0.6-41.4 0-80.4 18.2-116.2 53.8-35.8 36-50.8 79.4-44.6 128.8-9 4.2-18.2 8-27.6 11.4-13.4-17-29.8-31.6-48.2-42.8-26.6-16.4-56-25-85.4-25s-58.8 8.6-85.4 25c-18.4 11.2-34.6 25.8-48.2 42.8-9.4-3.4-18.6-7.2-27.6-11.4 6.4-49.8-8.6-93-44.6-128.8-30.6-30.6-66.6-46-107-46-7 0-14.2 0.4-21.6 1.4-4.2-9-8-18.2-11.4-27.6 17-13.4 31.6-29.8 43-48.2 16.4-26.6 25.2-56.2 25.2-85.4 0-48.4-24-91.8-68-124.8 3.4-9.4 7.4-18.8 11.6-27.8 4.2 0.4 8.4 0.6 12.4 0.6 41.4 0 80.4-18.2 116.2-53.8 35.8-36 50.8-79.4 44.6-128.8 8.8-3.8 18-7.6 27.4-11zM512 736c59.8 0 116-23.2 158.4-65.6s65.6-98.6 65.6-158.4-23.2-116-65.6-158.4-98.6-65.6-158.4-65.6-116 23.2-158.4 65.6-65.6 98.6-65.6 158.4c0 123.6 100.4 224 224 224zM632.8 128c-26 44.4-72.8 73.8-120.8 73.8-47.8 0-94.8-29.4-120.8-73.8-26.8 8-52.4 18.6-76.4 31.6 13 49.8 2.6 90-31.2 124-26.6 26.6-57.4 44.4-93.4 44.4-9.8 0-19.8-1.2-30.4-4-13.2 24-23.8 49.6-31.8 76.4 44.4 26 74 63.8 74 111.6s-29.6 94.8-74 120.8c8 26.8 18.6 52.4 31.6 76.4 13.8-3.6 27-5.4 39.4-5.4 32.2 0 60 12.2 84.4 36.6 34 33.8 44.2 74.2 31.2 124 24.2 13 49.6 23.6 76.4 31.6 26-44.4 73-73.8 120.8-73.8s94.8 29.4 120.8 73.8c26.8-8 52.4-18.6 76.4-31.6-13-49.8-2.6-90 31.2-124 26.6-26.6 57.4-44.4 93.6-44.4 9.8 0 19.8 1.2 30.4 4 13-24.2 23.6-49.8 31.6-76.4-44.2-26-73.6-63.8-73.6-111.6s29.6-85.6 73.8-111.6c-8-26.6-18.6-52.4-31.6-76.4-10.6 2.8-20.8 4-30.6 4-36 0-66.6-17.8-93.4-44.4-33.8-33.8-44.2-74.2-31.2-124-24-13-49.6-23.6-76.4-31.6v0zM512 704c-105.8 0-192-86-192-192s86-192 192-192 192 86 192 192c0 106-86 192-192 192v0z"></path>
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


IosSettingsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSettingsOutline.propTypes = {
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


export default IosSettingsOutline
