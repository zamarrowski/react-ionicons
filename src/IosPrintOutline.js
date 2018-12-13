import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPrintOutline extends Component {

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
        <path d="M865 224h-65v-96h-576v96h-63c-35.2 0-65 27.6-65 62.6v316.8c0 35 29.8 64.6 65 64.6h95v228h512v-228h97c35.2 0 63-29.6 63-64.6v-316.8c0-35-27.8-62.6-63-62.6zM256 160h512v64h-512v-64zM736 864h-448v-384h448v384zM896 603.4c0 17.4-13.4 32.6-31 32.6h-97v-188h-512v188h-95c-17.6 0-33-15.2-33-32.6v-316.8c0-17.4 15.4-30.6 33-30.6h704c17.6 0 31 13.2 31 30.6v316.8z"></path>
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


IosPrintOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPrintOutline.propTypes = {
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


export default IosPrintOutline
