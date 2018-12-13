import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBoat extends Component {

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
        <path d="M704 864c-52.2 18.2-132.8 31.6-192 31.6s-139.8-13.4-192-31.6c0 0-70 45-160 64 64.6 0 106.6-18 160-32 46 18 133.4 31.6 192 31.6s148-11.6 192-31.6c53.4 14 94 32 160 32-87.6-19-160-64-160-64z M891 526c0 0 0 0 0 0l-379-174-379 174c0 0 0 0 0 0-12.4 5.8-21 18.2-21 32.8 0 4.8 1 9.2 2.6 13.4l109.4 291.8c55 0 113.4-38 113.4-38 36 18 106.2 34.2 158.6 37.2 5.6 0.4 11 0.4 16 0.4s10.4-0.2 16-0.4c52.4-3 122.6-19 158.6-37.2 0 0 58.4 38 113.4 38l109.4-291.8c1.6-4.2 2.6-8.6 2.6-13.4 0-14.6-8.6-27-21-32.8zM424 576c-13.2 0-24-19.6-24-44s10.8-44 24-44 24 19.6 24 44-10.8 44-24 44zM600 576c-13.2 0-24-19.6-24-44s10.8-44 24-44 24 19.6 24 44-10.8 44-24 44z M783.8 254v-0.2c-11.2-53.2-35-93.8-79.8-93.8h-69.2l-16.4-64h-213.4l-16.2 64h-68.8c-45.8 0-70.2 41.4-79.6 94l-39.4 208.8 68.4-31.4 33.2-175.4c5-21.4 14.6-32 32.2-32h354.2c17.8 0 26.2 10 32.2 32l33.2 175.4 68.6 31.4-39.2-208.8z"></path>
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


IosBoat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBoat.propTypes = {
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


export default IosBoat
