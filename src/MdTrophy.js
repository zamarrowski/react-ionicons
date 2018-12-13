import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdTrophy extends Component {

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
        <path d="M784 210c1.8-54 0.4-112 0.2-114h-545.6c0 2-1.6 60 0.2 114h-142.8c0 136 19.8 204.6 42 253.4s52.8 90.6 117.4 140.6c60.2 46.6 191 107.2 208.6 115.2v56.6c-9.2 20-47 56.4-166.6 56.4h-41.4v96h512v-96h-51.4c-121.4 0-150-38.2-156.6-56.4v-56.6c18.6-9.2 161.8-80.6 208.8-115 50.4-36.8 101.8-103 117.4-140.6s41.8-129.6 41.8-253.6h-144zM219.2 423.8c-17.6-36.4-28-75.8-31.4-123.8h57.4c1.4 12 2.8 22.6 4.6 32.6 13.2 78.4 29.6 140.4 51.4 193-34.6-27-62.6-61.6-82-101.8zM804.8 423.8c-19.8 40.6-48 75.4-83.2 102.6 22-52.4 38-113.6 51.6-193.8 1.6-10 3.2-20.6 4.6-32.6h58.6c-3.6 48-13.8 87.4-31.6 123.8z"></path>
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


MdTrophy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdTrophy.propTypes = {
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


export default MdTrophy
