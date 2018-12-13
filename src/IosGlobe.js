import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGlobe extends Component {

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
        <path d="M512 96c-0.2 0-0.2 0-0.4 0 0 0 0 0-0.2 0s-0.4 0-0.4 0c-229.4 0.6-415 186.6-415 416s185.6 415.4 415 416c0.2 0 0.4 0 0.4 0s0.2 0 0.2 0 0.2 0 0.4 0c229.8 0 416-186.2 416-416s-186.2-416-416-416zM512 894.8c-0.2 0-0.2 0-0.4 0 0 0 0 0-0.2 0s-0.4 0-0.4 0c-210.8-0.6-381.8-171.8-381.8-382.8s170.8-382.2 381.8-382.6c0.2 0 0.2 0 0.4 0 0 0 0.2 0 0.2 0 0.2 0 0.2 0 0.4 0 211.4 0 382.8 171.4 382.8 382.8 0 211.2-171.4 382.6-382.8 382.6z M644.6 343.6c-37.4 9-76 14.4-115.8 15.6v136.2h135.2c-1.2-56.2-8.2-107.2-19.4-151.8z M528.6 165v163.8c37-1.2 73-6 107.6-14.4-26.2-82.8-67-137.2-107.6-149.4z M386.8 314.2c35 8.4 71.2 13.4 108.4 14.6v-164.2c-40.6 11.8-82 66.2-108.4 149.6z M761.2 266.8c-45.2-46-103-79.6-167.8-95 29.6 30.6 54.4 77.4 72.2 134.6 33.4-10.2 65.4-23.4 95.6-39.6z M694.6 495.4h166.6c-3.6-77.6-32.6-148.8-79-205.2-34.2 18.8-70.4 34.2-108.2 45.6 12.2 48 19.4 102.2 20.6 159.6z M359 495.4h136.4v-136.2c-40.2-1.2-79.2-6.6-116.8-15.8-11.4 44.6-18.4 95.8-19.6 152z M664 528.6h-135.4v136c39.8 1.2 78.6 6.4 116 15.6 11.2-44.4 18.2-95.6 19.4-151.6z M378.6 680.4c37.6-9.2 76.6-14.6 116.8-15.8v-136h-136.4c1.2 56.2 8.2 107.4 19.6 151.8z M495.4 859.2v-164.2c-37.2 1.2-73.6 6.2-108.6 14.6 26.4 83.4 67.8 138 108.6 149.6z M593.4 852.2c64.8-15.6 122.6-49 168-95.2-30.2-16.2-62.2-29.4-95.6-39.6-17.8 57.4-42.8 104-72.4 134.8z M429.4 172.2c-64.2 15.6-121.6 49-166.6 94.8 30 16 61.6 29.2 94.6 39.2 17.8-57 42.6-103.4 72-134z M674 688.2c38 11.4 74.2 26.8 108.4 45.6 46.4-56.4 75.4-127.6 79-205.2h-166.6c-1.4 57.4-8.6 111.4-20.8 159.6z M528.6 695v164c40.6-12.2 81.4-66.6 107.6-149.6-34.6-8.4-70.6-13.2-107.6-14.4z M349.2 335.6c-37.6-11.4-73.6-26.6-107.4-45.4-46.4 56.4-75.4 127.6-79 205.2h165.8c1-57.6 8.4-111.8 20.6-159.8z M328.4 528.6h-165.8c3.6 77.6 32.6 148.8 79 205.2 33.8-18.6 69.8-34 107.4-45.4-12-48-19.4-102.2-20.6-159.8z M262.6 757c45 45.8 102.4 79.2 166.8 94.8-29.4-30.6-54.2-77.2-72-134.2-33 10.2-64.8 23.4-94.8 39.4z"></path>
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


IosGlobe.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGlobe.propTypes = {
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


export default IosGlobe
