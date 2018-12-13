import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdExit extends Component {

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
        <path d="M430.938 665.604l59.726 59.728 213.336-213.332-213.336-213.334-59.726 59.73 110.938 110.938h-413.876v85.332h411.728l-108.79 110.938zM810.668 128h-597.336c-46.936 0-85.332 38.396-85.332 85.332v170.668h85.332v-170.666h597.336v597.336h-597.336v-170.67h-85.332v170.668c0 46.936 38.396 85.332 85.332 85.332h597.336c46.936 0 85.332-38.396 85.332-85.332v-597.336c0-46.936-38.396-85.332-85.332-85.332z"></path>
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


MdExit.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdExit.propTypes = {
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


export default MdExit
