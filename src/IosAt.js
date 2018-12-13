import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAt extends Component {

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
        <path d="M768 184.2c10.6 10 20.4 21 29.4 32.6 58.8 75.4 77.4 173.8 52.4 277.2-24.6 101.4-77 149-116.6 171-43.4 24-85.4 32.4-127.6 18v-0.2c-9.6-3.2-17-7.6-22.2-12.2-10.2-9.2-18-22.2-19.6-40.2h-1.6c-12.4 12-27.2 24.8-45 36.2s-36.6 16.8-57 16.8c-16.6 0-31.4-3-44.6-9.4-13.2-6.2-24.2-14.8-33.4-25.6s-16-23.2-20.8-37.2c-4.8-14-7.2-29.2-7.2-45.4 0-28 4.6-56 13.6-83.8s22-53 38.6-75.4c16.6-22.4 36.6-40.6 60.2-54.2 23.6-13.8 49.4-20.8 77.8-20.8 17.6 0 34 5.2 49 15.8s27 27.8 36.2 52l20-53h42.6l-77 233.6c-2.6 8.6-4.8 17.4-6.4 25.4s-2.2 15.2-2 21.4c0.2 6.2 1.8 13.2 4.8 17 0.4 0.6 1 1.2 1.6 1.8 21.2 18.2 69.8 10.6 104.8-8.8 34.2-18.8 79.4-60.2 101-150.4 22.6-93.6 6-182.2-46.4-249.8-45.6-58.4-109.2-117.6-193.6-133-27.8-5-44.2-7.6-67-7.6-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-133.2-62.6-251.8-160-327.8z M422.2 621.2c12.8 14.2 29 21.4 48.6 21.4 19.2 0 36.8-6.8 53.2-20.2 16.4-13.6 30.8-30 43-49.6s22-40.6 29-63.2 10.6-43 10.8-61c0-9.8-2-19.4-5.8-28.4-2-4.6-4.2-9-6.6-13.2-2.4-4-5.2-7.8-8.2-11.4-6-7.2-12.8-13-20.4-17.4s-15.6-6.6-23.8-6.6c-20.8 0-39.6 6.4-56.8 19s-32 28.4-44.2 47.4c-12.2 19-21.6 39.6-28.2 62-6.6 22.2-9.8 43-9.8 62.4 0 0 0 0 0 0.2 0 0 0 0 0 0 0 24.8 6.4 44.2 19.2 58.6z"></path>
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


IosAt.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAt.propTypes = {
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


export default IosAt
