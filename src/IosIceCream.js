import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosIceCream extends Component {

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
        <path d="M438.4 801.8l14.4 44.8 28.8-18z M571.8 846.8l14.6-45.6-44 27.4z M481.6 523.8l-1.2-0.8c-40.2-5-73.8-19.6-98.2-43.8-8.2 10-23.6 18-40 23.2l19.8 61.6 9.2 28.4 18.4-11.4 92-57.2z M389.4 619l-8.2 5 30.8 95.6 69.6-43.4z M512 695.2l-92.2 57.2 3.4 2.2 88.8 55.2 92.2-57.4-1.6-1z M604.2 600l-92.2-57.2-92.2 57.2 92.2 57.4z M641.8 479.4c-24.4 24.2-58 38.8-98.2 43.8l-1.2 0.8 111.2 69.2 9.6-29.6 19.6-60.6c-16.8-5.4-32.6-13.4-41-23.6z M462.8 878l5.2 16c0 0 15 38 44 38 30 0 44.4-38 44.4-38l5-15.6-49.4-31-49.2 30.6z M542.4 676.2l70.2 43.8 31-95.6-9-5.4z M760.8 327.8c-22 25.4-56.2 33.6-56.2 33.6 17.4-12 31.2-43.2 31.2-43.2 0-0.6 0-1 0-1.6 0.2-124-100-224.6-223.8-224.6s-224 101.4-224 225.4c0 0.6 0 2.6 0 2.6h0.6c0 0 14 30.2 31.2 42.2 0 0-34.4-8.6-56.4-34.2-23.6 14-39.6 39.4-39.6 69 0 44.2 35.8 80 80 80 25 0 63.4-11.6 78.2-29.8 30.6 30.4 75.6 45.6 129.8 45.6s99.4-15.4 129.8-45.8c14.6 18.2 53 29.6 78.2 29.6 44.2 0 80-36 80-80.2 0.2-29-15.6-54.6-39-68.6z"></path>
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


IosIceCream.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosIceCream.propTypes = {
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


export default IosIceCream
