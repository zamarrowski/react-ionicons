import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosKeypadOutline extends Component {

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
        <path d="M789.2 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM789.2 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M512 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z M789.2 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM789.2 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M512 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z M789.2 341.6c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8zM789.2 160c41.2 0 74.8 33.6 74.8 74.8s-33.6 74.8-74.8 74.8-74.8-33.6-74.8-74.8c-0-41.2 33.4-74.8 74.8-74.8z M512 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 309.6c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 309.6c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z"></path>
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


IosKeypadOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosKeypadOutline.propTypes = {
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


export default IosKeypadOutline
