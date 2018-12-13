import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAppstore extends Component {

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
        <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM256 480h106.2l-37 64h-69.2v-64zM278.6 704l19-90 49.6 32.4-68.6 57.6zM357.2 632.6l-49.8-30 33.8-58.4 37-64 74.8-129.6c3.2-5.6 10.4-7.4 15.8-4.2l30.2 17.2c5.6 3.2 7.4 10.2 4.2 15.8l-94.8 164.8-51.2 88.4zM424.2 544l36.8-64h105.4l36.2 64h-178.4zM619 544.6l-0.4-0.6-139.6-246.8c-3.2-5.4-1.2-12.6 4.2-15.8l30.2-17.2c5.6-3.2 12.6-1.2 15.8 4.2l120 211.6 19.6 34.4-49.8 30.2zM627 556.6l49.6-30 10 17.4 16.2 28.4-49.8 30-26-45.8zM729.4 704c-17-33.6-34.8-27.4-53-50.8-22.6-29.2-5.8-50.8 7.8-57.2 35.2-16.4 55 6 59.6 36.6 4.4 28-4.8 63.2-14.4 71.4zM768 544h-66l-36-64h102v64z"></path>
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


IosAppstore.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAppstore.propTypes = {
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


export default IosAppstore
