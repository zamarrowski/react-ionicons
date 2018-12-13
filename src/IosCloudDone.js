import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCloudDone extends Component {

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
        <path d="M826 452.2c-13.8-128.4-118-228.2-250-228.2-89.6 0-173 45.6-218.8 115.4-15.8-7.4-33.6-11.4-52.2-11.4-68.4 0-124 55-125 123.2-69.8 22-116 85.2-116 156.8 0 87.8 71.2 160 159 160h578c87.8 0 159-72.2 159-160 0-79.2-58-143.8-134-155.8zM475 618.6c-3 3-7.2 5.4-10.8 5.4s-8-2.6-11-5.6l-69.2-68.4 22-21.8 58.4 57.8 154-153.8 21.6 22.2-165 164.2z"></path>
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


IosCloudDone.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudDone.propTypes = {
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


export default IosCloudDone
