import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdWifi extends Component {

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
        <path d="M512 457.438c-45.758 0-83.194 37.058-83.194 82.36 0 45.304 37.436 82.364 83.194 82.364 45.756 0 83.194-37.058 83.194-82.364 0-45.302-37.438-82.36-83.194-82.36zM761.6 539.796c0-135.892-112.326-247.078-249.6-247.078s-249.6 111.186-249.6 247.078c0 90.606 49.922 170.894 124.792 214.144l41.614-72.064c-49.944-28.834-83.208-80.306-83.208-142.080 0-90.59 74.866-164.716 166.402-164.716 91.542 0 166.402 74.126 166.402 164.716 0 61.774-33.266 113.246-83.208 142.080l41.614 72.064c74.866-43.248 124.792-123.538 124.792-214.144zM512 128c-228.806 0-416 185.308-416 411.796 0 152.374 83.184 284.14 208 356.204l41.598-72.064c-99.838-57.648-166.414-162.648-166.414-284.138 0-181.186 149.782-329.436 332.816-329.436s332.812 148.25 332.812 329.436c0 121.49-66.568 228.542-166.41 284.138l41.598 72.064c124.812-72.064 208-203.83 208-356.204 0-226.488-187.194-411.796-416-411.796z"></path>
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


MdWifi.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdWifi.propTypes = {
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


export default MdWifi
