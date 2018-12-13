import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosDiscOutline extends Component {

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
        <path d="M512 363.6c81.8 0 148.6 66.6 148.6 148.6 0 81.8-66.6 148.4-148.6 148.4-39.8 0-77-15.4-105-43.4s-43.4-65.2-43.4-105c-0.2-82 66.6-148.6 148.4-148.6zM512 624.6c62.2 0 112.8-50.6 112.8-112.8s-50.6-112.8-112.8-112.8-112.8 50.6-112.8 112.8c0 62.2 50.6 112.8 112.8 112.8zM512 331.6c-99.8 0-180.6 80.8-180.6 180.6s80.8 180.4 180.6 180.4 180.6-80.8 180.6-180.4c0-99.8-80.8-180.6-180.6-180.6v0zM512 592.6c-44.6 0-80.8-36.2-80.8-80.8s36.2-80.8 80.8-80.8 80.8 36.2 80.8 80.8c0 44.6-36.2 80.8-80.8 80.8v0z M512 128c51.8 0 102.2 10.2 149.4 30.2 45.8 19.4 86.8 47 122 82.4s63 76.4 82.4 122c20 47.4 30.2 97.6 30.2 149.4s-10.2 102.2-30.2 149.4c-19.4 45.8-47 86.8-82.4 122s-76.4 63-122 82.4c-47.4 20-97.6 30.2-149.4 30.2s-102.2-10.2-149.4-30.2c-45.8-19.4-86.8-47-122-82.4-35.2-35.2-63-76.4-82.4-122-20-47.2-30.2-97.6-30.2-149.4s10.2-102.2 30.2-149.4c19.4-45.8 47-86.8 82.4-122 35.2-35.2 76.4-63 122-82.4 47.2-20 97.6-30.2 149.4-30.2zM512 772c69.4 0 134.8-27 183.8-76.2s76.2-114.4 76.2-183.8-27-134.8-76.2-183.8-114.4-76.2-183.8-76.2-134.8 27-183.8 76.2-76.2 114.4-76.2 183.8 27 134.8 76.2 183.8 114.4 76.2 183.8 76.2zM512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416v0zM512 740c-126 0-228-102.2-228-228s102-228 228-228 228 102 228 228-102 228-228 228v0z"></path>
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


IosDiscOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosDiscOutline.propTypes = {
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


export default IosDiscOutline
