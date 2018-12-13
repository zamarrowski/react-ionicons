import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBeaker extends Component {

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
        <path d="M340.8 832h374c12.6 0 28.8-8.6 40.2-20.4 7.6-7.8 11-23.2 11-43.8v-415.8h-478v414c0 21.6 5.2 39.4 13.8 50.2 8.2 10.4 21.4 15.8 39 15.8z M890.4 96h-633.4c-108.8 0-129 55.8-129 80.4 60.6 8.4 64 8.4 64 72.4 0 32 0 551 0 551 0 70.6 57.8 128 128.4 128h415.6c70.8 0 126-58.4 126-129v-620.4c4-35 25-63.2 27.2-66.6 2.4-3.8 6.8-8.8 6.8-11 0-2.4-0.6-4.8-5.6-4.8zM798 768c0 23.4-3.8 49.2-20.2 66-16.2 16.6-40.4 30-63 30h-374c-57.4 0-84.8-41.4-84.8-98v-446h542v448z"></path>
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


IosBeaker.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBeaker.propTypes = {
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


export default IosBeaker
