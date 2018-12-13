import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosFolderOutline extends Component {

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
        <path d="M914 192h-484c-5.582 0-8.542-1.17-12.188-4.816l-45.338-45.326c-9.744-9.192-17.752-13.858-34.474-13.858h-224c-27.57 0-50 20.634-50 46v672c0 26.634 23.366 50 50 50h800c25.366 0 46-22.43 46-50v-608c0-26.654-19.346-46-46-46zM114 160h224c6.994 0 7.474 0.378 12.35 4.976l44.834 44.836c9.68 9.68 20.744 14.188 34.816 14.188h484c8.896 0 14 5.104 14 14v84.752c-5.008-1.776-10.39-2.752-16-2.752h-800c-5.61 0-10.992 0.976-16 2.752v-148.752c0-8.646 9.344-14 18-14zM928 846c0 8.656-5.354 18-14 18h-800c-8.916 0-18-9.084-18-18v-478c0-8.822 7.178-16 16-16h800c8.822 0 16 7.178 16 16v478z"></path>
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


IosFolderOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFolderOutline.propTypes = {
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


export default IosFolderOutline
