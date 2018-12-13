import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTransgender extends Component {

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
        <path d="M854.6 832l68.6-68.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-68.6 68.6-54.6-54.6c34.4-51 54.6-112.6 54.6-178.8 0-98.8-44.8-187.2-115.2-246l179.2-178v152c0 8.8 7.2 16 16 16s16-7.2 16-16v-192c0-8.8-7.2-16-16-16h-192c-8.8 0-16 7.2-16 16s7.2 16 16 16h152l-181.4 182.4c-51-34.4-112.4-54.4-178.6-54.4s-127.6 20-178.6 54.4l-54.4-54.8 66.4-66.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-66.4 66.4-104.4-105h152c8.8 0 16-7.2 16-16s-7.2-16-16-16h-192c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-152l105 104.4-70.4 70.4c-6.2 6.2-6.2 16.4 0 22.6 3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6l70.4-70.4 51.6 51.2c-70.6 58.6-115.4 147-115.4 245.8 0 176.8 143.2 320 320 320 98.8 0 187.4-44.8 246-115.4l51.4 51.4-68.6 68.6c-6.2 6.2-6.2 16.4 0 22.6 3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6l68.6-68.6 68.6 68.6c3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6c6.2-6.2 6.2-16.4 0-22.6l-69-68.6zM715.6 779.6c-54.4 54.4-126.6 84.4-203.6 84.4s-149.2-30-203.6-84.4c-54.4-54.4-84.4-126.6-84.4-203.6s30-149.2 84.4-203.6c54.4-54.4 126.6-84.4 203.6-84.4s149.2 30 203.6 84.4c54.4 54.4 84.4 126.6 84.4 203.6s-30 149.2-84.4 203.6z"></path>
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


IosTransgender.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTransgender.propTypes = {
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


export default IosTransgender
