import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdOutlet extends Component {

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
        <path d="M739 64h-454.2c-121.8 0-220.8 101.2-220.8 225.2v445.6c0 124 99 225.2 220.8 225.2h454.4c121.8 0 221-101.2 221-225.2v-445.6c-0.2-124-99.2-225.2-221.2-225.2zM350 502v1.4c0 21.8-18.2 40.8-39.8 40.8h-46.6c-21.6 0-39.8-19-39.8-40.8v-207.2c2-21.6 18.4-40.4 39.8-40.4h46.6c21.8 0 39.8 19.6 39.8 41.6v204.6zM594 796.8c0 22.8-17.8 35.2-40.2 35.2h-83.6c-22.4 0-40.2-16.2-40.2-39.2v-58.6c0-46.6 36.2-84.6 82-84.6s82 38 82 84.6v62.6zM800 502v1.4c0 21.8-18.2 40.8-39.8 40.8h-48.6c-21.6 0-39.8-19-39.8-40.8v-207.2c2-21.6 18.4-40.4 39.8-40.4h48.6c21.6 0 39.8 19.6 39.8 41.6v204.6z"></path>
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


MdOutlet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdOutlet.propTypes = {
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


export default MdOutlet
