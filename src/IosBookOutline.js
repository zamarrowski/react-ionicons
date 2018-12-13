import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBookOutline extends Component {

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
        <path d="M695.242 128c-81.882 0-158.242 28-183.156 88.99-27.086-60.99-101.27-88.99-183.154-88.99-110.402 0-200.932 51.96-200.932 158v566h44.28c25.72-52.668 88.476-84 156.65-84 80.448 0 147.754 55.056 163.234 128h39.428c15.478-72.944 82.99-128 163.444-128 68.17 0 122.298 23.332 156.858 84h44.106v-566c0-106.040-90.354-158-200.758-158zM496 821.852c-36-51.742-97.46-85.852-167-85.852-69.538 0-129 20.11-167 71.852l-2 1.074v-526.926c6-83.65 80.178-122 168.586-122 90.324 0 164.29 37.416 166.726 123.616-0.034 1.458 0.032 2.918 0.032 4.384l0.656 26.206v507.646zM864 296v511.852c-36-51.742-99.462-71.852-169-71.852-69.54 0-131 34.11-167 85.852v-533.852c0-88.224 75.318-128 167.174-128 88.406 0 162.826 22.35 168.826 106v30z"></path>
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


IosBookOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBookOutline.propTypes = {
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


export default IosBookOutline
