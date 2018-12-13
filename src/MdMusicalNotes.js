import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdMusicalNotes extends Component {

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
        <path d="M320 128v515.2c-16.4-5.4-34.4-8.2-53.2-8.2-76.6 0-138.8 54.2-138.8 130.8s62.2 130.2 138.8 130.2c76.6 0 139.2-56.4 139.2-138.2v-357.8h404v243.2c-16.4-5.4-34.4-8.2-53.2-8.2-76.6 0-138.8 54.2-138.8 130.8s62.2 130.2 138.8 130.2c76.6 0 139.2-56.4 139.2-138.2v-629.8h-576zM810 320h-404v-106h404v106z"></path>
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


MdMusicalNotes.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMusicalNotes.propTypes = {
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


export default MdMusicalNotes
