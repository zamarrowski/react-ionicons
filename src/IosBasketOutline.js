import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBasketOutline extends Component {

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
        <path d="M800 448v-192c0-70.4-57.6-128-128-128h-320c-70.4 0-128 57.6-128 128v192h-160l105 388.6c9.4 34 40.8 59.4 78.2 59.4h529.4c37.4 0 68.8-25 78.6-59l104.8-389h-160zM918 480h0.2l-25.8 96h-156.4v-96h182zM140.4 608h147.6v128h-113l-34.6-128zM320 608h176v128h-176v-128zM704 576h-176v-96h176v96zM496 576h-176v-96h176v96zM496 768v96h-176v-96h176zM528 768h176v96h-176v-96zM528 736v-128h176v128h-176zM736 608h147.8l-34.4 128h-113.4v-128zM256 256c0-25.6 10-49.6 28.2-67.8s42.2-28.2 67.8-28.2h320c25.6 0 49.6 10 67.8 28.2s28.2 42.2 28.2 67.8v192h-512v-192zM288 480v96h-156.2l-26-96h182.2zM200 828.2l-16.4-60.2h104.4v96h-40.8c-22 0-41.4-14.6-47.2-35.8zM824.6 828.4c-6.2 21-25.8 35.6-47.8 35.6h-40.8v-96h104.8l-16.2 60.4z"></path>
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


IosBasketOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBasketOutline.propTypes = {
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


export default IosBasketOutline
