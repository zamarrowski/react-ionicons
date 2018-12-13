import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosNotificationsOutline extends Component {

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
        <path d="M576 800c0 34-28.8 64-64 64s-64.4-30-64.4-64h-32c0 52 43.2 95.8 96.2 95.8s96.2-43.8 96.2-95.8h-32z M747.8 458.4c0-198-98-265.6-189.8-281 0-1.2 0.2-2.2 0.2-3.4 0-25.4-20.6-46-46-46s-46 20.6-46 46c0 1.2 0 2.4 0.2 3.6-91.8 15.6-189.8 83.8-189.8 281.4-0.4 231-45.4 245-116.6 309h704c-70.8-64-116.2-78.2-116.2-309.6zM242.2 736c14.4-16 27.4-34.8 37.8-60 19.6-47.4 28.2-114.6 28.2-217.4 0-82.6 18-146.2 53.6-189 27.2-32.8 67.4-55.4 110.8-61 33.6-4.2 44.4-4.8 79.4 0 41.6 5.8 83.2 28 110.4 60.8 35.4 42.8 53.4 106.4 53.4 189 0 102.8 8.8 169.8 28.4 217.4 10.4 25.2 23.4 44.2 38 60.2h-540z"></path>
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


IosNotificationsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosNotificationsOutline.propTypes = {
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


export default IosNotificationsOutline
