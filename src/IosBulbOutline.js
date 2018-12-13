import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBulbOutline extends Component {

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
        <path d="M800 377.6c0-155.8-132.2-281.6-288-281.6s-288 125.8-288 281.6c0 62.2 26.4 118.2 60.4 166.2h-0.6c21.8 30 42.8 55.4 63 90 44 75.6 37.2 148.6 37.4 163v3h256v-3c0-17.8-7.2-87.4 36.8-163 20.2-34.6 41.2-60 63-90h-0.2c33.8-47.8 60.2-104 60.2-166.2zM702 540.6c-1.2 1.6-2.2 3-3.4 4.6-16.2 21.8-33 44.4-49.4 72.4-34.6 59.4-40.8 116.4-41.6 150.4h-31.6v-224.2l64-127.8h-33.2l-62.8 127.8v224.2h-64v-224.2l-62.8-127.8h-33.2l64 127.8v224.2h-31.8c-1-34-7.8-91.4-41.8-150-9-15.4-18.2-30-27.4-42h0.4l-37.2-51.2c-31.6-43.2-54.2-94.2-54.2-147.2 0-66.8 32-129.8 79.2-177s110-73 176.8-73 129.6 25.6 176.8 72.8c47.2 47.2 79.2 110 79.2 176.8 0 53-22.6 103.8-54.2 147.2l-11.8 16.2z M448 896h128v32h-128v-32z M416 832h192v32h-192v-32z"></path>
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


IosBulbOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBulbOutline.propTypes = {
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


export default IosBulbOutline
