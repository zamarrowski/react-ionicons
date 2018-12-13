import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCloudCircle extends Component {

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
        <path d="M512 96c-228.8 0-416 187.2-416 416s187.2 416 416 416c228.8 0 416-187.2 416-416s-187.2-416-416-416zM699.2 678.4c0 0-351.518 0-353.598 0-68.636 0-124.8-56.164-124.8-124.798 0-68.638 56.164-124.8 124.8-124.8 2.082 0 4.164 0 6.234 0 18.728-72.8 83.202-124.798 160.166-124.798 91.528 0 166.398 74.87 166.398 166.396h20.8c58.236 0 104 45.764 104 104.002 0 58.234-45.764 103.998-104 103.998z"></path>
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


MdCloudCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCloudCircle.propTypes = {
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


export default MdCloudCircle
