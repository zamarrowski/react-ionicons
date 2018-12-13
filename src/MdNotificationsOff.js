import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdNotificationsOff extends Component {

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
        <path d="M512 927.312c45.628 0 82.95-37.312 82.95-83.312h-165.9c-0 46 37.322 83.312 82.95 83.312z M262.166 214.344l0.106 0.148-66.092-65.938-48.172 48.212 126.084 126.306c-20.316 37.97-32.092 81.32-32.092 127.068v229.11l-82 83.312v41.438h595.486l72.364 72.66 48.158-48.602-24.208-24.058h0.632l-590.266-589.656z M782 450.14c0-127.052-90-235.354-208-262.436v-29.156c0-35.412-26.742-62.486-62-62.486-35.256 0-62 27.074-62 62.486v29.156c-30 6.876-58.096 19.002-83.5 35.326l415.5 415.68v-188.57z"></path>
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


MdNotificationsOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdNotificationsOff.propTypes = {
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


export default MdNotificationsOff
