import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdGitCompare extends Component {

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
        <path d="M384 764h-44c-49.2 0-58-7.2-67.6-19.2-11-13.8-16.4-38.2-16.4-108.4v-333.6c38.2-22.2 64-63.4 64-110.8 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.4 25.8 88.6 64 110.8v333.6c0 92.8 7.4 141.6 44.2 188 39.8 50.2 90 71.6 167.8 71.6h44v128l192-192-192-192v124zM192 112c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z M896 721.2v-339.6c0-92.8-7.4-141.6-44.2-188-39.8-50.2-90-69.6-167.8-69.6h-44v-124l-192 192 192 192v-128h44c49.2 0 58 5.2 67.6 17.2 11 13.8 16.4 38.2 16.4 108.4v339.6c-38.2 22.2-64 63.4-64 110.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-47.4-25.8-88.6-64-110.8zM832 912c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path>
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


MdGitCompare.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGitCompare.propTypes = {
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


export default MdGitCompare
