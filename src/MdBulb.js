import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBulb extends Component {

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
        <path d="M512 340.272c50.998 0 99.134 20.050 135.542 56.458 36.408 36.406 56.458 84.544 56.458 135.542 0 35.242-8.844 68.062-26.288 97.546-16.678 28.196-40.874 52.072-69.97 69.052l-31.742 18.524v178.606h-128v-178.606l-31.742-18.524c-59.374-34.648-96.258-98.486-96.258-166.598 0-50.998 20.050-99.134 56.458-135.542s84.544-56.458 135.542-56.458zM554.666 64c-12.792 0-85.332 0-85.332 0v128h85.332v-128zM812.792 171.728l-76.792 76.814 59.728 59.73 76.812-76.792-59.748-59.752zM211.208 171.728l-59.75 59.75 76.812 76.792 59.73-59.728-76.792-76.814zM512 276.272c-140.792 0-256 115.208-256 256 0 93.876 51.208 177.062 128 221.876v205.852h256v-205.854c76.792-44.812 128-125.876 128-221.876 0-140.792-115.208-255.998-256-255.998v0zM960 489.604h-128v85.334h128v-85.334zM192 489.604h-128v85.334h128v-85.334z"></path>
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


MdBulb.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBulb.propTypes = {
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


export default MdBulb
