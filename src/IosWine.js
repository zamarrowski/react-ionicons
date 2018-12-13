import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosWine extends Component {

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
        <path d="M528 650c0-44 41-77.4 80.4-109.6 15.8-13 30.8-25 43-38 53-55.4 52.4-103.4 52.4-142.2v-8.2c0-88.4-61.6-249.2-64-256h-256c-2.4 6.8-64 167-64 256v8.2c0 38.6-0.6 86.8 52.4 142.2 12.2 12.8 27.2 25 43 38 39.8 32.2 80.8 65.6 80.8 109.6v246h-144v32h320v-32h-144v-246zM405.4 128h213.2c10.8 32 39 125.4 49.6 192h-312.4c10.6-66.6 39-160 49.6-192z"></path>
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


IosWine.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosWine.propTypes = {
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


export default IosWine
