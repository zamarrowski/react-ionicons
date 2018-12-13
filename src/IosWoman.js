import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosWoman extends Component {

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
        <path d="M572 992c-12.2 0-23.6-4.6-32-13.2-6.4-6.6-14.2-18.2-14.2-37.2v-238.8h-27.8v238.8c0 19-8 30.8-14.8 37.4-8.6 8.4-20.2 13-32.6 13s-23.8-4.6-32.6-13c-6.8-6.6-14.8-18.2-14.8-37.4v-238.8h-87.8l89-341.2h-13.6l-48.8 180.8c-8 26.2-27.4 35.6-42.8 35.6v0c-13.2 0-25.8-6.4-34-17.4-9.6-12.8-12.2-29.8-7.2-47.8l58-208.2c8.4-30.4 41.4-76.4 97.4-78.6h196.8c56.8 2.4 88.2 52 97 77.8l0.2 0.8 58 208.6c4.8 18 2 35.2-7.8 48-8.2 10.8-20.8 17.2-33.8 17.2-15.4 0-34.6-9.6-42.6-36.2v-0.4l-48.6-180.2h-15.4l91 341.2h-90.2v238.8c0 19-7.8 30.6-14.2 37.2-8.4 8.6-19.6 13.2-31.8 13.2z M511.8 212.8c-48.4 0-87.8-40.6-87.8-90.4s39.4-90.4 87.8-90.4 87.8 40.6 87.8 90.4-39.4 90.4-87.8 90.4z"></path>
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


IosWoman.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosWoman.propTypes = {
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


export default IosWoman
