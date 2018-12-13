import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTrendingDown extends Component {

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
        <path d="M944 792h-224c-8.8 0-16-7.2-16-16s7.2-16 16-16h184l-328.8-328.4-167.8 168.2c-3 3-7 4.8-11.4 4.8-4.2 0-8.4-1.6-11.4-4.6l-316.4-316.8c-3.2-3.2-4.2-7.4-4.2-11.8 0-4.2 1.2-7.8 4.2-10.8 3.2-3.2 7.2-4.6 11.4-4.6 4 0 8.2 1.6 11.4 4.6l305 305.4 167.8-168c6.2-6.2 16.4-6.2 22.6 0l341.6 338.6v-184c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 15.4-16 15.4z"></path>
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


IosTrendingDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTrendingDown.propTypes = {
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


export default IosTrendingDown
