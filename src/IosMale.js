import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosMale extends Component {

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
        <path d="M912 96h-224c-8.8 0-16 7.2-16 16s7.2 16 16 16h184l-214 215.4c-59.6-54.2-139-87.4-226-87.4-185.6 0-336 150.4-336 336s150.4 336 336 336c185.6 0 336-150.4 336-336 0-87-33-166.4-87.4-226l215.4-214v184c0 8.8 7.2 16 16 16s16-7.2 16-16v-224c0-8.8-7.2-16-16-16zM736 592c0 81.2-31.6 157.6-89 215s-133.8 89-215 89c-81.2 0-157.6-31.6-215-89s-89-133.8-89-215 31.6-157.6 89-215 133.8-89 215-89c81.2 0 157.6 31.6 215 89s89 133.8 89 215z"></path>
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


IosMale.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMale.propTypes = {
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


export default IosMale
