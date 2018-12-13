import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosDoneAll extends Component {

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
        <path d="M733.8 364l-228 234.2-92.2-93.8-34.8 35.4 109.2 111.4c4.8 4.8 11.4 9 17.4 9 5.8 0 12.4-4 17.2-8.8l245.4-251.4-34.2-36z M290.8 504.2l-34.8 35.4 109.2 111.4c4.8 4.8 11.4 9 17.4 9 5.8 0 12.4-4 17.2-8.8l17.4-17.8-126.4-129.2z M595.2 380l-124 127.4 34.4 35 123.8-126.6z"></path>
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


IosDoneAll.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosDoneAll.propTypes = {
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


export default IosDoneAll
