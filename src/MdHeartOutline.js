import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdHeartOutline extends Component {

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
        <path d="M699.2 128c-72.8 0-141.436 33.484-187.2 87.894-45.766-54.41-114.4-87.894-187.2-87.894-128.964 0-228.8 100.442-228.8 230.19 0 159.032 141.436 286.696 355.672 483.388l60.328 54.422 60.328-54.422c214.234-196.694 355.672-324.358 355.672-483.388 0-129.748-99.836-230.19-228.8-230.19zM537.672 786.514l-8.438 7.746-17.234 15.546-17.232-15.544-8.428-7.738c-100.836-92.564-187.922-172.508-245.492-243.988-55.914-69.426-80.848-126.28-80.848-184.346 0-45.73 16.844-87.862 47.43-118.632 30.484-30.668 72.166-47.558 117.37-47.558 52.268 0 103.94 24.334 138.22 65.090l48.98 58.232 48.978-58.232c34.282-40.756 85.952-65.090 138.222-65.090 45.206 0 86.886 16.89 117.372 47.556 30.584 30.772 47.428 72.902 47.428 118.634 0 58.066-24.934 114.918-80.844 184.342-57.568 71.48-144.65 151.418-245.484 243.982z"></path>
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


MdHeartOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdHeartOutline.propTypes = {
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


export default MdHeartOutline
