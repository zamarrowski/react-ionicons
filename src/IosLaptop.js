import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLaptop extends Component {

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
        <path d="M896 735v-476.8c0-18.8-15.8-34.2-34.4-34.2h-699.2c-18.6 0-34.4 15.2-34.4 34.2v476.8h-96.2v31.2c0 6.2 62 33.8 104.2 33.8h752c48.6 0 104-28.2 104.2-33v-32h-96.2zM512 240c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8c0-4.4 3.6-8 8-8zM160 272.4h704v430.6h-704v-430.6zM596.6 751c0 0-158.6 0-169.2 0s-19.4-12-19.4-15h208c0 3-6 15-19.4 15z"></path>
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


IosLaptop.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLaptop.propTypes = {
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


export default IosLaptop
