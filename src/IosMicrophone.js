import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMicrophone extends Component {

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
        <path d="M608 384v-32h192v-16c0-115.6-82.8-212.8-192-235.2v123.2h-32v-127.4c-5.2-0.4-10.6-0.6-16-0.6h-32v160h-32v-160h-32c-5.4 0-10.8 0.2-16 0.6v127.4h-32v-123.2c-109.2 22.4-192 119.6-192 235.2v16h192v32h-192v64h192v32h-192v64h192v32h-192v16c0 40.4 10.2 78.6 28 112h520c17.8-33.4 28-71.6 28-112v-16h-192v-32h192v-64h-192v-32h192v-64h-192z M751.6 736h-479.2c41.2 54.6 105.4 91.4 177.6 95.6l-2 0.4v96h128v-96l-3-0.4c72.8-4 137.2-40.6 178.6-95.6z"></path>
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


IosMicrophone.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMicrophone.propTypes = {
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


export default IosMicrophone
