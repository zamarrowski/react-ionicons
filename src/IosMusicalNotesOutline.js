import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMusicalNotesOutline extends Component {

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
        <path d="M812.6 96.4c-9.4 1.8-404 78.4-412.4 80s-16.2 7.2-16.2 16c0 0 0 477 0 480.2s-0.2 14.4-4.8 23.4c-6.2 11.8-17 20.4-32.2 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29.2-128.8 103.6 0 62.2 44.8 90.2 83.4 95 4.2 0.6 9 1.4 14.2 1.4 0 0 0 0 0 0 13.4 0 48-2.6 78.4-22.4 22-14.4 48.2-42.8 48.2-95.6v-438l384-78c0 0 0 273.2 0 281.4s-0.4 17.8-5 26.8c-6.2 11.8-17 20.4-32.4 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29-128.8 103.4 0 67.4 52.6 91.2 83.6 94.6 2.4 0.2 5.2 0.2 8.2 0.2 0 0 0 0 0 0 20.4 0 51.4-5 77.6-20 35.8-20.6 55-53.6 55-96.4v-604.2c-0.2-8.8-7.6-17.8-19.6-15.4zM384 809.6c0 31-11.2 54.6-33.6 69.2-23.8 15.6-52.6 17.4-61 17.4 0 0 0 0 0 0-3.8 0-7.2-0.8-10.2-1.2-4.6-0.6-21-3.8-34.6-14.8-13.8-11-20.8-27.4-20.8-48.4 0-45.2 49.2-60 103.8-72.4 11.4-2.6 21.2-4.8 29.2-7.4 11-3.6 19-8.4 27-13.8v71.4zM800 715.6c0 31-13.2 53.8-38.8 68.6-20.8 11.8-46.2 15.8-61.8 15.8 0 0 0 0 0 0-2.6 0-4.2 0.2-4.8 0-9.2-1-55.2-8.4-55.2-62.4 0-45.2 49.2-60 103.8-72.4 11.4-2.6 21.4-4.8 29.4-7.4 11-3.6 19.2-8.4 27.2-13.8v71.6zM800 261.8l-384 76v-132l384-74.4v130.4z"></path>
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


IosMusicalNotesOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMusicalNotesOutline.propTypes = {
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


export default IosMusicalNotesOutline
