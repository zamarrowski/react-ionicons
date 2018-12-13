import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdContacts extends Component {

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
        <path d="M478.416 687.874c-35.56 20.206-76.684 31.752-120.51 31.752-43.818 0-84.934-11.542-120.492-31.74-94.326 28.776-152.128 124.114-173.414 208.114h587.824c-21.278-84-79.074-179.366-173.408-208.126z M357.906 240.070c-116.958 0-211.772 94.788-211.772 211.716s94.814 211.714 211.772 211.714c116.958 0 211.772-94.788 211.772-211.714 0-116.928-94.816-211.716-211.772-211.716zM357.906 613.046c-67.342 0-124.89-45.026-147.994-101.046h295.988c-23.108 56.022-80.652 101.046-147.994 101.046z M645.204 768h314.796c-21.276-84-79.074-163.382-173.406-192.144-35.562 20.208-76.686 31.746-120.512 31.746-29.646 0-58.048-5.308-84.336-14.98-14.89 24.94-33.854 51.184-55.948 69.812 52.692 20.274 92.494 65.566 119.406 105.566z M613.090 400h200.986c-23.108 56-80.654 100.586-147.994 100.586-17.75 0-34.808-3.384-50.75-9.020-2.676 17.418-7.086 34.14-13.040 50.236 20.132 6.348 41.558 9.724 63.79 9.724 116.958 0 211.772-94.82 211.772-211.744 0-116.93-94.814-211.732-211.772-211.732-74.98 0-140.854 39.406-178.486 98.18 63.618 36.536 110.326 99.77 125.494 173.77z"></path>
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


MdContacts.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdContacts.propTypes = {
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


export default MdContacts
