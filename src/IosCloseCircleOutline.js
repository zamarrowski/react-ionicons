import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCloseCircleOutline extends Component {

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
        <path d="M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0s162.4-426 0-588.4zM781.6 781.6c-148.6 148.6-390.6 148.6-539.2 0s-148.6-390.6 0-539.2 390.6-148.6 539.2 0c148.8 148.6 148.8 390.6 0 539.2z M680.4 320l-168.8 168.4-168-167.6-23.6 23.6 168 167.6-168 167.6 23.6 23.6 168-167.6 168.8 168.4 23.6-23.6-168.8-168.4 168.8-168.4z"></path>
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


IosCloseCircleOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloseCircleOutline.propTypes = {
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


export default IosCloseCircleOutline
