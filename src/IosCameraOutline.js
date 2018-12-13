import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCameraOutline extends Component {

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
        <path d="M835 320h-123.4c-64.2-72-84.4-96-109-96h-177c-24.6 0-44.4 24-109 96h-26.6v-32h-68v32h-27c-35.2 0-67 26.4-67 61.4v352c0 35 31.8 66.6 67 66.6h640c35.2 0 61-31.6 61-66.6v-352c0-35-25.8-61.4-61-61.4zM864 733.4c0 18.6-12.4 34.6-29 34.6h-640c-17.4 0-35-17.4-35-34.6v-352c0-16.4 16.2-29.4 35-29.4h135.6l9.6-6.4c8-9 15.4-20 22.2-27.6 22.6-25.4 39-43.4 50.6-53.8 9.4-8.4 12.4-8.2 12.4-8.2h177c0 0 3.2-0.2 13.4 9 12.2 11 29.4 33 53.2 59.6 5.8 6.6 12 13.6 18.6 21l9.6 6.4h137.8c17.6 0 29 12 29 29.4v352z M512 379c-94.2 0-171 76.8-171 171s76.8 171 171 171 171-76.8 171-171-76.8-171-171-171zM512 689c-76.8 0-139-62.2-139-139s62.2-139 139-139 139 62.2 139 139-62.2 139-139 139z M704 384h34v34h-34v-34z M576 550c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z"></path>
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


IosCameraOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCameraOutline.propTypes = {
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


export default IosCameraOutline
