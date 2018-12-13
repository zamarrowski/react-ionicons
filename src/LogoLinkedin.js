import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoLinkedin extends Component {

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
        <path d="M834.4 128h-640.8c-35 0-65.6 25.2-65.6 59.8v642.2c0 34.8 30.6 65.8 65.6 65.8h640.6c35.2 0 61.6-31.2 61.6-65.8v-642.2c0.2-34.6-26.4-59.8-61.4-59.8zM366 768h-110v-342h110v342zM314.8 374h-0.8c-35.2 0-58-26.2-58-59 0-33.4 23.4-59 59.4-59s58 25.4 58.8 59c0 32.8-22.8 59-59.4 59zM768 768h-110v-187c0-44.8-16-75.4-55.8-75.4-30.4 0-48.4 20.6-56.4 40.6-3 7.2-3.8 17-3.8 27v194.8h-110v-342h110v47.6c16-22.8 41-55.6 99.2-55.6 72.2 0 126.8 47.6 126.8 150.2v199.8z"></path>
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


LogoLinkedin.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoLinkedin.propTypes = {
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


export default LogoLinkedin
