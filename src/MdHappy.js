import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdHappy extends Component {

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
        <path d="M512 96c-230.874 0-416 187.2-416 416s185.126 416 416 416 416-187.2 416-416c0-228.8-187.198-416-416-416zM512 844.8c-183.036 0-332.808-149.766-332.808-332.8 0-183.036 149.774-332.8 332.808-332.8s332.808 149.764 332.808 332.8c0 183.036-149.772 332.8-332.808 332.8zM657.6 470.4c35.366 0 62.402-27.036 62.402-62.4s-27.038-62.4-62.402-62.4c-35.364 0-62.4 27.036-62.4 62.4s27.036 62.4 62.4 62.4zM366.4 470.4c35.364 0 62.4-27.036 62.4-62.4s-27.038-62.4-62.4-62.4c-35.366 0-62.402 27.036-62.402 62.4s27.038 62.4 62.402 62.4zM512 740.8c97.766 0 178.872-60.328 212.162-145.602h-424.324c33.29 85.274 114.396 145.602 212.162 145.602z"></path>
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


MdHappy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdHappy.propTypes = {
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


export default MdHappy
