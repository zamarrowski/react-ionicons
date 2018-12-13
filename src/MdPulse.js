import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdPulse extends Component {

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
        <path d="M856 538c-43 0-81.2 26.2-96.8 66h-82.4l-62.8-161.4c-5.4-16.4-20.6-27.4-38-27.4-0.4 0-0.6 0-0.8 0-17.6 0.4-32.8 12-37.6 29l-67.2 270.8-111-583.6c-3.4-20.2-20.2-35.4-39.4-35.4-19 0-33.8 12.4-38.8 32.4l-100.6 475.6h-116.6v80h148c18.4 0 34.4-12.4 38.8-30.4l61.4-321.2 108.2 564.2c3 17.6 17.8 30.2 37.2 31.4 0.8 0 1.6 0 2.4 0 18.6 0 33.8-10.6 38.4-27l80.4-325.8 31 81.4c5.4 16.4 20.6 27.4 38 27.4h112.8c16.6 38 54.2 62 95.2 62 27.8 0 53.8-11.2 73.6-31.6 19.6-20.2 30.4-46.6 30.4-74.4 0.2-57.2-45.4-102-103.8-102z"></path>
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


MdPulse.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPulse.propTypes = {
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


export default MdPulse
