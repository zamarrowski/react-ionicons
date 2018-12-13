import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGlasses extends Component {

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
        <path d="M930.8 494c-4.4-44-24.8-86-57.8-116.8-34.2-31.8-78.6-49.4-125.4-49.4-83 0-154.6 54.8-177 134-14-14-37-23.4-58.6-23.4s-44.6 9.4-58.6 23.4c-22.4-79.2-94-134-177-134-46.6 0-91.2 17.4-125.4 49.2-33 31-53.4 73-57.8 117h-29.2v36h29.2c4.4 44 24.8 86 57.8 116.8 34.2 31.8 78.6 49.4 125.4 49.4 101.6 0 184.2-82.4 184.2-184 0-0.2 0-0.2 0-0.2v0c0-19.8 23-43.2 51.4-43.2s51.4 23.4 51.4 43.2v0c0 0 0 0 0 0.2 0 101.6 82.6 184 184.2 184 46.6 0 91.2-17.4 125.4-49.4 33-30.8 53.4-73 57.8-117h29.2v-36h-29.2z"></path>
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


IosGlasses.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGlasses.propTypes = {
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


export default IosGlasses
