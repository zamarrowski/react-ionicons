import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosSnowOutline extends Component {

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
        <path d="M863.4 696.8l-75.2-43.8c26.2-33.8 64.2-49.6 64.8-49.8 8.6-3.4 13.2-13.4 10.4-22.2s-12.2-13.2-20.8-9.6c-2.2 1-50.2 20.6-82.6 65l-213.6-124.4 213.4-124.4c32.2 44.4 80.4 64.2 82.6 65 8.6 3.4 18-0.8 20.8-9.6s-1.8-18.8-10.4-22.2c-0.4-0.2-38.6-15.8-64.8-49.8l75.2-43.8c8.2-4.8 11-15.4 6.2-23.8s-15.2-11.2-23.6-6.4l-75.2 43.8c-15.8-39.6-10.4-81-10.2-81.4 1.4-9.2-4.8-18.4-13.8-20.2s-17.4 4.2-18.6 13.4c-0.4 2.4-7 54.2 15 104.8l-213 124.4v-248c54-6 95-38 97-39.6 7.4-5.8 8-16 2-23-6.2-7-16.8-7.8-24-2-0.4 0.2-32.8 25.8-74.8 31.6v-87.4c0-9.6-8.4-17.4-18-17.4s-18 7.8-18 17.4v87.4c-42-6-74.4-31.4-74.8-31.6-7.4-5.8-18-4.8-24.2 2-6.2 7-5.4 17.2 1.8 23 1.8 1.4 43 33.6 97 39.6v248.2l-213-124.4c22-50.4 15-102.4 14.8-104.8-1.4-9.2-9.6-15.2-18.6-13.4s-15.2 11-13.8 20.2c0 0.4 5.6 41.6-10.2 81.4l-75.2-43.8c-8.2-4.8-18.8-2-23.6 6.4s-2 19 6.4 23.8l75.2 43.8c-26 33.6-64.2 49.6-64.6 49.8-8.6 3.4-13.2 13.4-10.4 22.2s12.2 13.2 20.8 9.6c2.2-0.8 50.2-20.6 82.6-65l213.2 124.2-213.4 124.4c-32.2-44.4-80.4-64.2-82.6-65-8.6-3.4-18 0.8-20.8 9.6s1.8 18.8 10.4 22.2c0.4 0.2 38.6 16 64.6 49.8l-75.2 43.8c-8.2 4.8-11 15.4-6.2 23.8s15.2 11.2 23.6 6.4l75.2-43.8c16 39.8 10.4 81 10.2 81.4-1.4 9.2 4.8 18.4 13.8 20.2s17.4-4.2 18.6-13.4c0.4-2.4 7-54.2-15-104.8l213.2-124.4v248.2c-54 6-95 38-97 39.6-7.4 5.8-8 16-2 23 6.2 7 16.8 7.8 24 2 0.4-0.2 32.8-25.6 74.8-31.6v87.4c0 9.6 8.4 17.4 18 17.4s18-7.8 18-17.4v-87.4c42 6 74.4 31.4 74.8 31.6 7.4 5.8 18 4.8 24.2-2 6.2-7 5.4-17.2-1.8-23-1.8-1.4-43-33.6-97-39.6v-248.2l213 124.4c-22 50.4-15 102.4-14.8 104.8 1.4 9.2 9.6 15.2 18.6 13.4s15.2-11 13.8-20.2c0-0.4-5.6-41.8 10.2-81.4l75.2 43.8c8.2 4.8 18.8 2 23.6-6.4s2-19-6.2-23.8z"></path>
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


IosSnowOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSnowOutline.propTypes = {
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


export default IosSnowOutline
