import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTrophy extends Component {

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
        <path d="M768 192c0-38.6 0-64 0-64h-512c0 0 0 25.4 0 64h-160v16c0 164 61 264.4 164 271.6 25.8 98.4 167.8 151.6 236 159.4v225h-176v32h384v-32h-176v-225c68.2-7.8 210.2-61 236-159.4 103-7.2 164-107.4 164-271.6v-16h-160zM161.4 376.6c-14.2-27.4-31.2-75.6-33.2-152.6h127.8c0 65.8 0 153.6 0 222.8-40-5.4-73-28.8-94.6-70.2zM862.6 376.6c-21.6 41.4-54.6 64.8-94.6 70.2 0-69.2 0-157 0-222.8h127.8c-2 77-19 125.2-33.2 152.6z"></path>
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


IosTrophy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTrophy.propTypes = {
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


export default IosTrophy
