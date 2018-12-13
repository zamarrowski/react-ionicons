import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPaperPlaneOutline extends Component {

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
        <path d="M96 541.8l239.8 103.2 59.6 275 115-161.8 233.6 169.8 184-832-832 445.8zM829.8 184.8l-486.2 428.6-174-74.8 660.2-353.8zM367 638l-0.4-2.2 336.2-304.4-300.6 349.6 0.8 0.6h-1l-3.2 103.2-31.8-146.8zM429.8 816.4l3.6-113.4 51.4 36.4-0.2 0.2-54.8 76.8zM724.2 869.6l-274.2-194.6 429.8-509-155.6 703.6z"></path>
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


IosPaperPlaneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPaperPlaneOutline.propTypes = {
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


export default IosPaperPlaneOutline
