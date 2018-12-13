import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdClock extends Component {

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
        <path d="M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0 162.4-162.4 162.4-426 0-588.4zM773.2 324.2c15.2-8.8 35-3.6 43.8 11.8 8.8 15.2 3.6 35-11.8 43.8-15.2 8.8-35 3.6-43.8-11.8-8.8-15.2-3.6-35 11.8-43.8zM160 512c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32zM250.8 699.8c-15.2 8.8-35 3.6-43.8-11.8-8.8-15.2-3.6-35 11.8-43.8 15.2-8.8 35-3.6 43.8 11.8 8.8 15.2 3.6 35-11.8 43.8zM262.6 368c-8.8 15.2-28.4 20.6-43.8 11.8-15.2-8.8-20.6-28.4-11.8-43.8 8.8-15.2 28.4-20.6 43.8-11.8s20.6 28.6 11.8 43.8zM336 207.2c15.2-8.8 35-3.6 43.8 11.8 8.8 15.2 3.6 35-11.8 43.8s-35 3.6-43.8-11.8c-8.8-15.4-3.4-35 11.8-43.8zM320.4 428.6l31.2-53.2 190.4 113.8v278.8h-62v-246.8l-159.6-92.6zM379.8 805.2c-8.8 15.2-28.4 20.6-43.8 11.8s-20.6-28.4-11.8-43.8c8.8-15.2 28.4-20.6 43.8-11.8 15.2 8.8 20.6 28.4 11.8 43.8zM512 864c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zM512 224c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32c0 17.6-14.4 32-32 32zM688 816.8c-15.2 8.8-35 3.6-43.8-11.8-8.8-15.2-3.6-35 11.8-43.8 15.2-8.8 35-3.6 43.8 11.8s3.4 35-11.8 43.8zM699.8 250.8c-8.8 15.2-28.4 20.6-43.8 11.8s-20.6-28.4-11.8-43.8c8.8-15.2 28.4-20.6 43.8-11.8s20.6 28.6 11.8 43.8zM816.8 688c-8.8 15.2-28.4 20.6-43.8 11.8-15.2-8.8-20.6-28.4-11.8-43.8 8.8-15.2 28.4-20.6 43.8-11.8s20.6 28.6 11.8 43.8zM832 544c-17.6 0-32-14.4-32-32s14.4-32 32-32c17.6 0 32 14.4 32 32s-14.4 32-32 32z"></path>
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


MdClock.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdClock.propTypes = {
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


export default MdClock
