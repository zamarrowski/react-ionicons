import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosOptions extends Component {

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
        <path d="M64 752h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h182.7v64h-182.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-566.7z M64 480h182.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h566.7v64h-566.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-182.7z M64 208h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h182.7v64h-182.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-566.7z"></path>
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


IosOptions.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosOptions.propTypes = {
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


export default IosOptions
