import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoDesignernews extends Component {

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
        <path d="M580.8 290l-126.8-98 127.2 204.4z M658 192v326h-72.8l-126.4-197.2 3.4 197.2h-80.2v-214l-74.6-58.6c2 2.4 4 4.8 5.8 7.4 20 27.8 30 61 30 101 0 98.4-61.2 164.2-153.8 164.2h-125.4v0.8l399.2 313.2h496.8v-403.8l-302-236.2z M259.8 356.2c0-58-28.4-90.2-79.4-90.2h-38.4v178h38c52 0 79.8-30.8 79.8-87.8z"></path>
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


LogoDesignernews.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoDesignernews.propTypes = {
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


export default LogoDesignernews
