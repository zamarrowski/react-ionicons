import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosText extends Component {

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
        <path d="M512 192c-212.2 0-384 138.2-384 308.6 0 61.4 22.4 118.6 60.8 166.6 1.8 1.8 5.8 7.6 7.2 9.8 0 0-2-3.2-2.2-3.8 0 0 0 0 0 0v0c0 0 0 0 0 0 4.6 6.6 7.2 14.2 7.2 22.4 0 2.8-35.8 116-35.8 116v0c-2.6 8.8 4.2 17.8 15.2 20 1.6 0.4 3.2 0.4 4.8 0.4 2.6 0 5-0.4 7.4-1l3.2-1.2 101.2-44c1.8-0.8 18-7 20-7.8 0 0 1.2-0.4 1.2-0.4s-0.2 0-1.2 0.4c6.8-2.4 14.4-3.6 22.4-3.6 7.2 0 14.2 1 20.6 3 0.2 0 0.4 0 0.4 0.2 1 0.4 2 0.6 3 1 46.2 15.8 96.8 20.6 150.2 20.6 212 0 382-128.2 382-298.6 0.4-170.4-171.6-308.6-383.6-308.6v0z"></path>
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


IosText.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosText.propTypes = {
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


export default IosText
