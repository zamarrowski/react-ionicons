import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBeaker extends Component {

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
        <path d="M896.2 69.8c0-2.4-0.8-5.8-5.8-5.8h-633.4c-108.6 0-128.8 54.8-128.8 79.6 60.6 8.4 63.8 9.4 63.8 73.4 0 32 0 614 0 614 0 70.6 57.8 129 128.6 129h415.4c70.6 0 128-58.4 128-129 0 0 0-7.4 0-20.4v-664c4.4-35 24-63.6 26.2-67 2.4-3.8 6-7.6 6-9.8zM708.4 864h-355.8c-31.8 0-59.4-23.8-64.6-54.2v-649.8h480v639.4c0 36-24.8 64.6-59.6 64.6z M364 320v452c0 8.8 7.2 16 16 16h296c8.8 0 16-7.2 16-16v-452h-328z"></path>
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


MdBeaker.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBeaker.propTypes = {
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


export default MdBeaker
