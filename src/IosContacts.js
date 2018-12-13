import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosContacts extends Component {

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
        <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM689 816c0-59-35.6-111-91.6-130.4-27-9.4-56.2-10-83.2-19.4-8.2-2.8-24.4-6.2-27.8-15.6-3.2-9.2-3.2-20-3.8-29.6-0.4-7.6-0.6-15.2-0.6-22.8 0-5 12.8-15.6 15.6-20.2 10.8-18 11.8-42.2 13.8-62.6 17.4 4.8 19.6-27.4 22.6-37.2 2.2-6.8 10-41.8-5.2-47.2 5-8.8 7-19.6 8.4-29.4 4-25.6 5.6-53.6-2.2-78.6-16.2-52-66-81.2-118.6-82.8-53.4-1.8-107 23.8-127 75.6-9.6 25.2-8.8 52.6-5.6 79 1.4 12 3.4 25.4 9.4 36.2-12.8 5.6-9 35.4-6.8 42.6 3.2 10.2 6 46.8 24.2 41.8 1.6 16.2 3.4 32.8 7.8 48.6 3 10.6 9.2 19.6 16.4 27.8 3.6 4 5.4 4.4 5.2 9.6-0.2 15.6 0.2 32.4-3.8 47.6s-37.4 21.6-50.8 24.4c-36 7.4-69.2 10.8-99.2 33.2-0.6 0.4-1 0.8-1.4 1.2-34.4-57.2-54.2-124.2-54.2-195.6 0-210.2 171.2-381.4 381.4-381.4s381.4 170.8 381.4 381.2c0 59.2-13.6 115.4-37.8 165.4-8.8-25.6-30.4-44.8-57-53.6-16.2-5.2-47.4-6.8-59-20.8-5.8-7-2-33.2-2-33.2 50.4-2.8 62-12.2 62-12.2 7.8-4.6 4.2-5.4 0.2-12.2-21.8-36.6-12-83-13-123.2-0.8-33.4-9.6-70-40-88.8-15.2-9.4-39.4-13.8-62.8-13.8-19 0-37.4 2.8-50.6 8.2-84.8 34-34.8 146.4-63.8 210.8-5 10.8-12.2 14.6 0.4 21 0 0 15 8.8 57.8 12.6 0 0 0.6 25.2 0 27.8-2.2 9.8-23.6 16.6-31.6 18.8-8.2 2.2-30.8 9.2-58.2 22.6 0 0 30.4 3 50 9.8 0 0 52.8 12 92 50 36 34.8 41.2 77.4 42 128.6-10.4 7-21.2 13.4-32.4 19.2l-0.6-33z"></path>
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


IosContacts.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosContacts.propTypes = {
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


export default IosContacts
