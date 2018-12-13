import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBulb extends Component {

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
        <path d="M800 377.8c0-155.8-132.2-281.8-288-281.8s-288 126.2-288 281.8c0 62 26.4 118.2 60.4 166.2h-0.6c21.8 30 42.8 55.4 63 90 44 75.6 37.2 148.6 37.4 163v3h64v-256.2l-64.2-127.8h33.2l62.8 127.8v256.2h64v-256.2l62.8-127.8h33.2l-64 127.8v256.2h64v-3c0-17.8-7.2-87.4 36.8-163 20.2-34.6 41.2-60 63-90h-0.2c34-48 60.4-104.2 60.4-166.2z M448 896h128v32h-128v-32z M416 832h192v32h-192v-32z"></path>
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


IosBulb.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBulb.propTypes = {
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


export default IosBulb
