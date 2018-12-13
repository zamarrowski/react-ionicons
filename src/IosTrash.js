import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTrash extends Component {

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
        <path d="M640 226v-39.4c0-32.4-26.2-58.6-58.6-58.6h-139c-32.2 0-58.4 26.2-58.4 58.6v39.4h-160v30h42.2l47.2 581.4c0 32.4 26.2 58.6 58.6 58.6h282c32.4 0 58.6-26.2 58.6-58.6l46.6-581.4h40.8v-30h-160zM414 186.6c0-16.2 12.4-28.6 28.6-28.6h139c16.2 0 28.6 12.4 28.6 28.6v39.4h-196v-39.4h-0.2zM405.4 802l-21.4-482h29l21.8 482h-29.4zM526 802h-28v-482h28v482zM618.6 802h-29.2l21.6-482h29l-21.4 482z"></path>
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


IosTrash.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTrash.propTypes = {
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


export default IosTrash
