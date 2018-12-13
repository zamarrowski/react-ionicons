import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdCall extends Component {

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
        <path d="M853.332 661.334c-53.332 0-104.542-8.542-151.458-23.458-14.938-4.272-32-2.146-42.664 10.666l-93.878 93.856c-121.604-61.856-219.728-160-281.604-281.606l93.878-93.854c10.664-10.666 14.924-27.728 10.664-42.666-17.074-49.062-25.604-100.272-25.604-153.606 0-23.458-19.198-42.666-42.666-42.666h-149.334c-23.468 0-42.666 19.208-42.666 42.666 0 401.062 324.272 725.334 725.332 725.334 23.46 0 42.668-19.208 42.668-42.666v-149.334c0-23.458-19.208-42.666-42.668-42.666z"></path>
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


MdCall.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCall.propTypes = {
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


export default MdCall
