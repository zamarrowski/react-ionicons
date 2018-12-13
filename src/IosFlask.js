import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosFlask extends Component {

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
        <path d="M782 734l-0.4-0.2-134.2-221.8h-270.2l-133.2 221.8h-0.4l-0.4 0.6c-11 16.6-16.6 37.6-16.6 49.4 0 25.8 9 33.6 12 36.2 9 7.6 25.4 12 47.4 12h452c20.6 0 36.4-5 46-13.6 8.4-7.6 13-20 13.4-35.6 0.4-11.8-4.2-32-15-48.4l-0.4-0.4z M873.8 708.8l-233.8-390.8v-190h32v-32h-320v32h32v190l-231.8 390.8c-16.8 31.8-25 62.8-24.2 91.2 2.2 73 57.4 128 130.2 128h511.8c72.6 0 124.2-55.2 126-128 0.6-28.4-5.2-59.4-22.2-91.2zM432 192h48v32h-48v-32zM432 288h80v32h-80v-32zM398.6 384h81.4v32h-100.4l19-32zM829.2 784c-1.4 48.4-31.8 80-91.4 80h-451.8c-59.8 0-91.4-24.4-91.4-79.6 0-19 8-46 21.8-67l142.6-237.4h306.4l143.6 237.4c14 21.2 20.8 47.8 20.2 66.6z"></path>
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


IosFlask.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFlask.propTypes = {
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


export default IosFlask
