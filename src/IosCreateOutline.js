import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCreateOutline extends Component {

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
        <path d="M736 832h-576v-544h448.234l32-32h-512.234v608h640v-480.234l-32 32z M475.246 568.168l-19.412-19.414 342.646-342.646-22.626-22.628-359.854 359.822v64.698h64.432l360.090-359.968-22.628-22.572z M888.426 160.624l-24.93-24.932c-5.328-4.758-12.384-7.692-20.004-7.692-7.624 0-14.608 2.936-19.858 7.7l-24.302 24.3 64.786 64.786 24.3-24.3c4.766-5.25 7.582-12.234 7.582-19.858 0-7.62-2.816-14.678-7.574-20.004z"></path>
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


IosCreateOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCreateOutline.propTypes = {
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


export default IosCreateOutline
