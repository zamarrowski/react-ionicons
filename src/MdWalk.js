import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdWalk extends Component {

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
        <path d="M576 224c44.446 0 79.994-35.552 79.994-80 0-44.45-35.548-80-79.994-80s-80.006 35.55-80.006 80c0 44.448 35.56 80 80.006 80z M576 464h208v-80h-144l-89.604-138.666c-15.396-23.334-36.272-36.272-61.866-36.272-6.396 0-17.656 1.062-25.598 3.494l-222.932 75.444v224h80v-160l81.062-32-161.062 640h80l113.396-328.542 100.604 136.542v192h76v-256l-114.062-192 39.49-123.728 40.572 75.728z"></path>
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


MdWalk.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdWalk.propTypes = {
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


export default MdWalk
