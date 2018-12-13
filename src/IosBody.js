import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBody extends Component {

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
        <path d="M608 159.676c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z M848 288h-672c-26.51 0-48 21.49-48 48s21.49 48 48 48h196.902c11.158 2 26.394 7.674 34.432 28.504 9.302 24.112 4.74 67.212-1.078 103.454l-7.55 42.79c-0.038 0.208-0.078 0.414-0.116 0.622-0.004 0.016-0.004 0.024-0.008 0.040l-60.75 344.536c-4.606 26.106 12.828 51 38.934 55.606 26.11 4.602 50.666-12.832 55.268-38.942l41.966-239.914v0.334c0 0 12.5-65.030 36.904-65.030h2.192c24.904 0 36.904 65.030 36.904 65.030v-0.166l41.966 239.826c4.602 26.11 29.326 43.498 55.436 38.896 26.106-4.606 43.456-29.524 38.85-55.628l-60.792-344.552c-0.004-0.016-0.026-0.040-0.030-0.054-0.038-0.208-0.088-0.434-0.126-0.644l-7.554-42.828c-5.818-36.242-10.382-79.262-1.082-103.376 8.040-20.828 23.272-26.504 34.43-28.504h196.902c26.51 0 48-21.49 48-48s-21.49-48-48-48z"></path>
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


IosBody.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBody.propTypes = {
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


export default IosBody
