import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosVideocamOutline extends Component {

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
        <path d="M607.4 256h-442c-37.6 0-71.4 28.2-71.4 65.4v375.8c0 37.2 33.8 70.8 71.4 70.8h442c37.6 0 66.6-33.6 66.6-70.8v-375.8c0-37.2-29-65.4-66.6-65.4zM640 697.2c0 18.6-13.8 36.8-32.6 36.8h-442c-18.8 0-37.4-18.2-37.4-36.8v-375.8c0-18.6 18-31 36.8-31l442 0.2c18.8 0 33.2 12.2 33.2 30.8v375.8z M734 426v171.2l196 106.8v-384l-196 106zM896 380v264.6l-128-67v-131.2l128.2-67.2-0.2 0.8z"></path>
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


IosVideocamOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosVideocamOutline.propTypes = {
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


export default IosVideocamOutline
