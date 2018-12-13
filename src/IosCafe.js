import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCafe extends Component {

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
        <path d="M64 800h896v32h-896v-32z M400 768c30 0 131.4 0 160 0 17.6 0 116-24 189.4-160.8 6.2 0.6 12.4 0.8 18.6 0.8 106 0 192-78.8 192-176 0-77.2-54.2-142.8-129.8-166.6 1.2-23.4 1.8-47.8 1.8-73.4h-704c0 512 242 576 272 576zM928 432c0 79.4-71.8 144-160 144-1 0-2.2 0-3.2 0 30.4-67.2 54.4-157.2 63.4-277.4 58.4 21.4 99.8 73.2 99.8 133.4z"></path>
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


IosCafe.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCafe.propTypes = {
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


export default IosCafe
