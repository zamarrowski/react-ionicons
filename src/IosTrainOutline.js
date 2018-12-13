import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTrainOutline extends Component {

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
        <path d="M694.4 928h45.6l-109-106.4-35.2 10.4 32.2 32h-232l32.2-32-34.8-10.4-109.4 106.4h45.6l34.2-32h296.4z M512 736c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zM512 579c-33.6 0-61 27.4-61 61s27.4 61 61 61 61-27.4 61-61-27.4-61-61-61z M674 128h-34c0-17.6-14.4-32-32-32h-192c-17.6 0-32 14.4-32 32h-30c-70.6 0-130 55.4-130 126v448c0 70.6 288 130 288 130s288-59.4 288-130v-448c0-70.6-55.4-126-126-126zM418 128h188v32h-188v-32zM768 701c0 3.2-17.4 28.6-130 63.8-54.4 17-107.4 30.8-125.2 34.6-17.8-3.8-71-17.4-125.4-34.4-113-35.2-129.4-60.6-131.4-63.8v-447.2c0-52.4 44.6-94 98-94h30c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32h34c25.6 0 49 9.4 66.8 27.2s27.2 41.2 27.2 66.8v447z M672 288c0 0 0 0 0 0v128c0 0 0 0 0 0h-320c0 0 0 0 0 0v-127.8c0 0 0-0.2 0-0.2h320zM672 256h-320c-17.6 0-32 14.4-32 32v128c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32v-128c0-17.6-14.4-32-32-32v0z"></path>
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


IosTrainOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTrainOutline.propTypes = {
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


export default IosTrainOutline
