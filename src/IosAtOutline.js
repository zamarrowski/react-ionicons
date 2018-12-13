import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAtOutline extends Component {

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
        <path d="M867.8 689.2c-65.8 127.6-195.2 206.8-337.6 206.8-101 0-194.6-39.8-263.8-112.2-68.8-72-106.6-168.4-106.6-271.8s37.8-199.8 106.6-271.8c69.2-72.4 163-112.2 263.8-112.2 101.8 0 187.8 38.6 242.2 108.4 52.6 67.6 69 156.2 46.4 249.8-21.8 90.2-67 131.6-101 150.4-35 19.4-83.6 26.8-104.8 8.8v0c-0.6-0.6-1.2-1.2-1.6-1.8-3-3.8-4.6-10.8-4.8-17s0.4-13.4 2-21.4c1.6-8 3.8-16.8 6.4-25.4l77.2-233.8h-42.6l-20 53c-9.2-24.2-21.2-41.6-36.2-52-15-10.6-31.4-15.8-49-15.8-28.4 0-54.4 7-77.8 20.8-23.6 13.8-43.6 31.8-60.2 54.2s-29.4 47.6-38.6 75.4c-9.2 27.8-13.6 55.8-13.6 83.8 0 16.2 2.4 31.4 7.2 45.4s11.8 26.4 20.8 37.2c9 10.8 20.2 19.4 33.4 25.6s28 9.4 44.6 9.4c20.4 0 39.4-5.4 57-16.8s32.6-24.2 45-36.2h1.6c1.6 18 9.4 31 19.6 40.2 5.2 4.6 12.6 9 22.2 12.2v0.2c42.2 14.4 84.2 6 127.6-18 39.6-22 92.2-69.4 116.6-171 25-103.2 6.4-201.6-52.4-277.2-60.4-77.6-155.4-120.4-267.2-120.4-109.6 0-211.4 43.4-286.6 122-74.6 78-115.6 182.4-115.6 294s41 216 115.6 294c75.2 78.8 177.2 122 286.6 122 154.2 0 294.4-85.8 365.8-224l-28.2-14.8zM567 572.8c-12.2 19.6-26.6 36-43 49.6-16.4 13.4-34 20.2-53.2 20.2-19.6 0-35.8-7.2-48.6-21.4-12.8-14.4-19.2-33.8-19.2-58.6 0-19.2 3.2-40 9.8-62.4 6.6-22.2 16-43 28.2-62s27-34.8 44.2-47.4c17.2-12.6 36.2-19 56.8-19 8.2 0 16 2.2 23.8 6.6 7.6 4.4 14.4 10.2 20.4 17.4s11 15.2 14.8 24.4c3.8 9 5.8 18.6 5.8 28.4 0 18.2-3.6 38.6-10.6 61.2-7.2 22.4-17 43.4-29.2 63z"></path>
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


IosAtOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAtOutline.propTypes = {
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


export default IosAtOutline
