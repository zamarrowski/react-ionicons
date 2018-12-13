import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosInfiniteOutline extends Component {

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
        <path d="M902.458 376.196c-37.094-36.262-86.558-56.196-139.288-56.196-52.726 0-102.19 19.934-139.284 56.196l-84.458 82.374 27.298 26.894 84.458-82.612c29.866-29.058 69.528-45.146 111.756-45.146 42.226 0 81.892 16.088 111.756 45.146 61.594 60.278 61.594 158.26 0 218.296-29.864 29.058-69.53 45.146-111.756 45.146-42.228 0-81.89-16.088-111.756-45.146l-251.042-244.952c-37.33-36.262-86.792-56.196-139.288-56.196-52.726 0-102.19 19.934-139.286 56.196-38.338 37.422-57.526 86.686-57.568 135.804-0.042 49.222 19.146 98.298 57.568 135.804 37.096 36.26 86.558 56.196 139.286 56.196 52.73 0 102.19-19.936 139.29-56.196l84.222-82.372-27.294-26.658-84.458 82.374c-29.864 29.058-69.528 45.146-111.758 45.146-42.226 0-81.888-16.088-111.752-45.146-61.598-60.28-61.598-158.26 0-218.296 29.864-29.058 69.526-45.146 111.752-45.146 42.23 0 81.894 16.088 111.758 45.146l251.040 244.954c37.326 36.258 86.79 56.194 139.286 56.194 52.726 0 102.19-19.936 139.286-56.196 38.496-37.344 57.744-86.604 57.774-135.804 0.030-49.202-19.16-98.34-57.542-135.804z"></path>
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


IosInfiniteOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosInfiniteOutline.propTypes = {
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


export default IosInfiniteOutline
