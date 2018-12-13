import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdArchive extends Component {

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
        <path d="M907.188 200.002l-64.706-78.598c-11.544-16.15-32.316-25.404-53.154-25.404h-554.658c-20.832 0-41.602 9.254-53.152 25.404l-64.702 78.598c-13.88 13.844-20.816 34.668-20.816 57.77v577.78c0 50.848 41.6 92.448 92.45 92.448h647.106c50.848 0 92.444-41.6 92.444-92.45v-577.78c0-23.1-6.926-43.924-20.812-57.768zM512 766.218l-254.22-254.218h161.78v-92.448h184.886v92.448h161.78l-254.226 254.218zM193.068 188.442l36.972-46.222h554.662l43.93 46.222h-635.564z"></path>
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


MdArchive.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdArchive.propTypes = {
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


export default MdArchive
