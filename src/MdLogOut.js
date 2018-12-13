import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdLogOut extends Component {

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
        <path d="M384 554.8h379.4l-87.2 89.4 59.8 59.8 192-192-192-192-62 59.8 89.4 89.4h-379.4v85.6z M511.4 842.6c-88.2 0-171-34.4-233.4-96.8s-96.6-145.4-96.6-233.8c0-88.2 34.4-171.4 96.6-233.8 62.4-62.4 145.2-96.8 233.4-96.8 88 0 170.6 34.2 233 96.4l60.6-60.6c-17-16.8-35.6-32.4-55.4-46.4-70.2-48.8-152.4-74.8-238.2-74.8-229 0-415.4 186.6-415.4 416s186.4 416 415.4 416c85.8 0 168-26 238-75 20-14 38.4-29.4 55.4-46.4l-60.4-60.4c-62.2 62.2-145 96.4-233 96.4z M896.008 513.694l-1.697-1.697 1.697-1.697 1.697 1.697-1.697 1.697z"></path>
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


MdLogOut.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdLogOut.propTypes = {
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


export default MdLogOut
