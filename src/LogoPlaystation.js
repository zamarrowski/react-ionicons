import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoPlaystation extends Component {

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
        <path d="M799.6 406c-1.6-34.2-6.6-69-21.6-100.2-8.2-17.2-19.4-33-33-46.4-12.6-12.8-27.2-23.4-42.6-32.6-34.2-20.4-75-34-168.8-62s-149.6-36.8-149.6-36.8v716.6l159.8 51.4c0 0 0.2-397.6 0.2-599v-7.6c0-18.6 15-33.6 32.2-33.6h1c17 0 31 15 31 33.6v266.6c22 10.6 58.4 18.6 83.6 18.2 16.6 0.4 33.4-3.4 48-11.4 15.2-8.2 27.8-20.8 36.8-35.6 10.2-16.6 16.4-35.6 19.8-54.6 3.8-21.6 4-44.2 3.2-66.6z M173.4 715.6c54.8-19.6 178.6-59 178.6-59v-94.4c0 0-153 49.6-222.6 74.2-17.2 6.2-34.6 11.8-51.4 19-19.6 8.2-38.8 17.4-56.2 29.6-7.6 5.2-14.4 11.8-18.4 20.2s-4.4 18.4-1 27.2c4 10.2 11.6 18.6 20.2 25.2 15.6 11.8 34.2 19 52.8 24.4 56.8 18.8 116.8 28 176.8 26.6 29-0.4 72-3.8 100-8.8v-84c0 0-22 5-82.6 25-9.2 3-18.4 6.6-28 8.6-14.2 3.2-28.8 4.2-43.2 4.4-13-0.6-26.4-1.4-38.6-6.2-4.4-2-9.2-4.4-11-9.2-1.6-4 0.6-8 3.4-10.8 5.6-5.8 13.6-9 21.2-12z M1024 691.8c-0.2-12-7.4-22.4-15.8-30-14.2-12.6-31.8-20.6-49.4-27-11-3.8-18.6-6.6-29.4-10-50.4-16.4-103.8-22.4-156.6-22.6-16 0.6-46.2 1-62 2.8-43.8 5-134.6 30.8-134.6 30.8v97.6c0 0 135-43.2 193-63.6 19.4-6.6 40.2-9.2 60.6-9.2 13 0.4 26.4 1.4 38.8 6.2 4.4 1.8 9 4.4 11 9 1.8 5.2-1.8 10-5.8 13-9.4 7.6-21.4 10.6-32.4 14.8-82 29-265.4 89.4-265.4 89.4v94c0 0 234.4-79.2 341.6-117.6 17.8-6.6 35.8-12.2 52.8-20.8 15.8-8 31.6-17.2 43.6-30.6 6.2-7.2 10-16 10-26.2z"></path>
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


LogoPlaystation.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoPlaystation.propTypes = {
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


export default LogoPlaystation
