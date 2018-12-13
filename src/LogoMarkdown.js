import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoMarkdown extends Component {

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
        <path d="M895.318 192h-766.636c-35.674 0-64.682 28.968-64.682 64.616v510.698c0 35.672 29.008 64.686 64.682 64.686h766.636c35.674 0 64.682-29.014 64.682-64.688v-510.696c0-35.648-29.008-64.616-64.682-64.616zM568.046 704h-112.096v-192l-84.080 107.756-84.044-107.756v192h-112.088v-384h112.088l84.044 135.96 84.080-135.96h112.096v384zM735.36 704l-139.27-192h84v-192h112.086v192h84.054l-140.87 192z"></path>
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


LogoMarkdown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoMarkdown.propTypes = {
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


export default LogoMarkdown
