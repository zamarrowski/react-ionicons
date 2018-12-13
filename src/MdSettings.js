import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdSettings extends Component {

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
        <path d="M827.934 553.6c2.12-12.47 2.12-27.036 2.12-41.6s-2.12-27.036-2.12-41.6l89.334-68.636c8.52-6.236 10.638-16.634 4.26-27.036l-85.098-143.528c-4.258-8.328-17.014-12.47-25.534-8.328l-106.372 41.602c-21.276-16.636-46.788-31.202-72.32-41.602l-14.896-110.234c-2.12-8.308-10.638-16.636-21.276-16.636h-170.196c-10.636 0-19.154 8.328-21.274 16.636l-17.016 110.234c-25.534 10.4-48.928 24.964-72.342 41.602l-106.372-41.602c-10.638-4.142-21.276 0-25.534 8.328l-85.098 143.53c-4.238 8.306-2.122 20.798 4.258 27.036l91.482 68.634c0 14.564-2.12 27.036-2.12 41.6s2.12 27.036 2.12 41.6l-89.336 68.636c-8.52 6.236-10.636 16.634-4.26 27.036l85.098 143.528c4.26 8.328 17.016 12.47 25.534 8.328l106.374-41.602c21.274 16.636 46.788 31.202 72.32 41.602l17.016 110.234c2.138 10.4 10.636 16.636 21.274 16.636h170.196c10.638 0 19.156-8.328 21.276-16.636l17.036-110.234c25.514-10.4 48.928-24.964 72.32-41.602l106.374 41.602c10.636 4.142 21.274 0 25.534-8.328l85.098-143.53c4.258-8.306 2.12-20.798-4.26-27.036l-93.6-68.634zM510.936 657.6c-82.978 0-148.92-64.47-148.92-145.6s65.942-145.6 148.92-145.6 148.922 64.47 148.922 145.6-65.944 145.6-148.922 145.6z"></path>
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


MdSettings.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdSettings.propTypes = {
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


export default MdSettings
