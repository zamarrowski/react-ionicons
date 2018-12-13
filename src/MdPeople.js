import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdPeople extends Component {

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
        <path d="M674.908 464c67.198 0 122.184-54.004 122.184-120 0-65.994-54.986-120-122.184-120s-122.18 54.006-122.18 120c-0 65.996 54.982 120 122.18 120zM349.092 464c67.198 0 122.18-54.004 122.18-120 0-65.994-54.982-120-122.18-120s-122.184 54.006-122.184 120c0 65.996 54.986 120 122.184 120zM349.092 552c-95.716 0-285.092 45.996-285.092 140v108h576v-108c0-94.004-195.198-140-290.908-140zM674.908 574.006c-12.21 0-20.65 0-34.908 1.994 46.852 34.004 64 56 64 116v108h256v-108c0-94.004-189.376-117.994-285.092-117.994z"></path>
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


MdPeople.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPeople.propTypes = {
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


export default MdPeople
