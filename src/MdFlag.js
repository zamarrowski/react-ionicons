import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdFlag extends Component {

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
        <path d="M792 166.4c-27.6 3.4-62.2 8.4-99.2 8.4-57.6 0-110-13.6-163-24.4-53.8-11-109.4-22.4-168.2-22.4-117.2 0-157 24.2-161.2 26.8l-8.4 5.8v735.4h96v-356.4c19.4-2.4 43.8-4 73.8-4 54.6 0 105.6 20 159.6 31 55.2 11.2 112 23 173.8 23 36.8 0 69.2-4.8 96.8-8 15-1.8 28-3.4 40-5.4v-415.8c-10 2-25 4.2-40 6z"></path>
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


MdFlag.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdFlag.propTypes = {
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


export default MdFlag
