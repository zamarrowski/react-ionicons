import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoSteam extends Component {

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
        <path d="M960 416.4c0 41-33.2 74.4-74.4 74.4-41 0-74.4-33.2-74.4-74.4 0-41 33.2-74.4 74.4-74.4 41 0 74.4 33.4 74.4 74.4zM885.2 278c-76.2 0-138 61.4-138.8 137.4l-86.4 124c-3.6-0.4-7.2-0.6-10.8-0.6-19.4 0-37.4 5.4-52.8 14.6l-391.6-157.4c-10.2-46.4-51.8-81.4-101.2-81.4-57-0.2-103.6 46.6-103.6 103.6s46.6 103.6 103.6 103.6c19.4 0 37.4-5.4 52.8-14.6l391.6 157.2c10.2 46.6 51.6 81.6 101.2 81.6 53.6 0 98-41.2 103-93.4l133-97.2c76.6 0 138.8-62 138.8-138.6s-62.2-138.8-138.8-138.8zM885.2 323.8c51.4 0 93 41.8 93 93 0 51.4-41.8 92.8-93 92.8-51.4 0-93-41.6-93-92.8 0-51.4 41.6-93 93-93zM103.6 341.8c29.2 0 54.6 16.4 67.4 40.4l-37.8-15.2v0.2c-30.6-11-64.4 4-76.6 34.2-12.2 30.4 1.8 64.6 31.4 77.8v0.2l32.2 12.8c-5.2 1.2-10.8 1.8-16.4 1.8-42.2 0-76.2-34-76.2-76.2-0.2-41.8 33.8-76 76-76zM649.2 566.2c42.2 0 76.2 34 76.2 76.2s-34 76.2-76.2 76.2c-29.4 0-54.8-16.4-67.4-40.6 12.6 5 25 10 37.6 15.2 31 12.4 66.4-2.6 78.8-33.6s-2.6-66.2-33.8-78.8l-31.8-12.8c5.6-1 11-1.8 16.6-1.8z"></path>
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


LogoSteam.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoSteam.propTypes = {
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


export default LogoSteam
