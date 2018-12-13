import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdBasket extends Component {

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
        <path d="M724.2 410.4l-178.4-265.4c-7.8-11.4-20.8-17-33.8-17s-26 5.6-33.8 17.4l-178.4 265h-195c-22.4 0-40.8 18.2-40.8 40.4 0 3.6 0.4 7.2 1.6 11l103.4 375c9.4 34 40.8 59 78.2 59h529.4c37.4 0 68.8-25 78.6-59l103.4-375 1.2-11c0-22.2-18.4-40.4-40.8-40.4h-194.8zM389.8 410.4l122.2-178 122.2 178h-244.4zM512 734.2c-44.8 0-81.4-36.4-81.4-81s36.6-81 81.4-81 81.4 36.4 81.4 81c0 44.6-36.6 81-81.4 81z"></path>
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


MdBasket.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBasket.propTypes = {
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


export default MdBasket
