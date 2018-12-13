import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosLinkOutline extends Component {

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
        <path d="M557.2 693l-135.8 135.8c-30 30-70.2 46.6-113.2 46.6s-83-16.6-113.2-46.6c-30-30-46.6-70.2-46.6-113.2s16.6-83 46.6-113.2l135.8-135.8c7.8-7.8 16.2-14.6 25-20.4 10.2-6.8 21.2-12.2 32.6-16.4 10.6-3.8 21.6-6.6 33-8.2 7.4-1 14.8-1.6 22.4-1.6 3.4 0 6.8 0.2 10.2 0.4 39 2.4 75.2 18.6 103 46.2 27.6 27.6 43.8 64 46.2 103 10.8-2 21.4-5.4 31.2-10-4.4-42.2-22.8-83.4-55-115.6s-73.2-50.6-115.6-55c-11.4-1.2-23-1.4-34.4-0.6-12 0.8-23.8 2.8-35.4 6-12.2 3.2-24.2 7.6-35.6 13.4-18.2 9-35.4 21-50.6 36.2l-135.8 135.8c-74.6 74.6-74.6 196.8 0 271.6v0c74.6 74.6 196.8 74.6 271.6 0l135.8-135.8c15.2-15.2 27.2-32.2 36.2-50.6-12.8 2-25.6 3-38.4 3-5.4 9-12.2 17.4-20 25z M851.4 172.6v0c-74.6-74.6-196.8-74.6-271.6 0l-135.8 135.8c-15.2 15.2-27.2 32.2-36.2 50.6 12.8-2 25.6-3 38.4-3 5.8-9 12.6-17.4 20.4-25l135.8-135.8c30-30 70.2-46.6 113.2-46.6s83 16.6 113.2 46.6c30 30 46.6 70.2 46.6 113.2 0 42.8-16.6 83-46.6 113.2l-135.8 135.8c-7.8 7.8-16.2 14.6-25 20.4-10.2 6.8-21.2 12.2-32.6 16.4-10.6 3.8-21.6 6.6-33 8.2-7.4 1-14.8 1.6-22.4 1.6-3.4 0-6.8-0.2-10.2-0.4-39-2.4-75.2-18.6-103-46.2-27.6-27.6-43.8-64-46.2-103-10.8 2-21.4 5.4-31.2 10 4.4 42.2 22.8 83.4 55 115.6v0c32.2 32.2 73.2 50.6 115.6 55 11.4 1.2 23 1.4 34.4 0.6 12-0.8 23.8-2.8 35.4-6 12.2-3.2 24.2-7.6 35.6-13.4 18.2-9 35.4-21 50.6-36.2l135.8-135.8c74.2-74.8 74.2-197-0.4-271.6z"></path>
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


IosLinkOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLinkOutline.propTypes = {
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


export default IosLinkOutline
