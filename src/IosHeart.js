import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosHeart extends Component {

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
        <path d="M718.77 160c-78.838 0-164.428 35.198-206.77 105.6-42.34-70.402-127.932-105.6-206.77-105.6-137.936 0-241.23 86.476-241.23 231.558 0 62.576 25.124 143.848 81.846 211.314 56.718 67.47 90.458 103.4 200.306 176 109.848 72.604 165.848 85.128 165.848 85.128s56-12.524 165.848-85.128c109.846-72.6 143.588-108.53 200.306-176 56.722-67.466 81.846-148.738 81.846-211.314 0-145.082-103.294-231.558-241.23-231.558z"></path>
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


IosHeart.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHeart.propTypes = {
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


export default IosHeart
