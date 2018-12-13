import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCopy extends Component {

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
        <path d="M592 96h-239c-44.2 0-81 34.8-81 79v17h-15c-44.2 0-81 34.8-81 79v576c0 44.2 36.8 81 81 81h416c44.2 0 79-36.8 79-81v-15h17c44.2 0 79-36.8 79-81v-399l-256-256zM592 185.2l166.8 166.8h-166.8v-166.8zM688 847c0 9.4-6.8 17-15 17h-416c-8.8 0-17-8.2-17-17v-576c0-8.2 7.6-15 17-15h15v511c0 44.2 20.8 65 65 65h351v15zM784 751c0 9.4-6.8 17-15 17h-416c-8.8 0-17-8.2-17-17v-576c0-8.2 7.6-15 17-15h175v256h256v335z"></path>
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


MdCopy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCopy.propTypes = {
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


export default MdCopy
