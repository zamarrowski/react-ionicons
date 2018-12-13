import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBackspaceOutline extends Component {

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
        <path d="M790 192h-330c-93.4 0-146.4 69.4-204 127s-144.2 149.4-144.2 149.4c-9.8 11.2-15.8 25.6-15.8 41.8 0 16 6 30.6 15.8 42 0 0 68.6 75.2 144.2 151 75.6 75.6 113.4 129 204 129h330c77 0 138-65 138-142v-360.2c0-77-61-138-138-138zM896 690c0 29-10.6 56.8-31 77.4-20.2 20.8-46.6 32.6-75 32.6h-330c-65.2 0-96.4-32.6-153-90.8l-171.4-178.4c-3.6-4.2-7.6-11.2-7.6-20.8 0-9.4 4-16.4 7.6-20.6l166.2-172.2c24.4-25.4 47.6-49 73.8-66.6 27.6-18.6 54.4-26.8 84.4-26.8h330c28.6 0 55 10.6 75.2 30.8s30.8 46.6 30.8 75.2v360.2z M632.8 512l127.2-126.8-29.2-29.2-127.2 127-126.4-126.4-29.2 29.2 126.6 126.2-126.6 126.4 29.2 29 126.4-126.2 127.2 126.8 29.2-29z"></path>
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


IosBackspaceOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBackspaceOutline.propTypes = {
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


export default IosBackspaceOutline
