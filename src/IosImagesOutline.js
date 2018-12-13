import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosImagesOutline extends Component {

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
        <path d="M780.8 243.8l-12.8-179.8-704 48 46.6 639.8 44.4-3.2-11 157.8 768 53.6 48-704-179.2-12.2zM138.4 717.8l-40.2-574.6 640.4-44.8 10 143.2-32.2-2.2-7.4-107-574.8 40.4 30.6 436.4-7.6 107.2-18.8 1.4zM193.2 204l-12.4 175.8-12.4-177.4 510.8-35.8 5 70.6-491-33.2zM881.2 925.8l-705-49.2 44.6-638.6 705 49.2-44.6 638.6z M720.597 465.539c-17.631-1.234-30.923-16.527-29.689-34.158s16.527-30.923 34.158-29.689c17.631 1.234 30.923 16.527 29.689 34.158s-16.527 30.923-34.158 29.689z M252.6 272.4l-31.2 447 639 44.6 31.2-447-639-44.6zM338.2 695.4l155-190.2 126.8 209.8-281.8-19.6zM659.2 717.8l-46.4-76.6 49-60 86.4 142.8-89-6.2zM830.6 729.8l-43.4-3-121.6-201-70.4 86.4-98.2-162.4-197.8 242.8-43.6-3 26.8-383.2 575.2 40.2-27 383.2z"></path>
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


IosImagesOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosImagesOutline.propTypes = {
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


export default IosImagesOutline
