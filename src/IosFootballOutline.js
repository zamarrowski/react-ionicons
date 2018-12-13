import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosFootballOutline extends Component {

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
        <path d="M512 96c-229.726 0-416 186.272-416 416s186.274 416 416 416c229.744 0 416-186.276 416-416s-186.26-416-416-416zM594.302 884.358c-27.028 5.314-60.654 8.374-88 8.9-26.396-0.39-52.148-3.47-77-8.986-4.288-1.098-8.766-2.276-13.61-3.554l-48.834-130.87 39.29-77.848h211.708l1.14 2.152 38.68 77.704-47.236 128.564c-5.334 1.428-10.716 2.738-16.138 3.938zM178.634 327.044l36.726 105.576-84.608 73.22c1.032-64.77 18.288-125.664 47.882-178.796zM379.156 154.56l114.844 78.592v116.294l-141.994 120.134-107.14-48.818-44.664-128.038c44.018-62.408 106.276-111.064 178.954-138.164zM650.050 494.412l1.842 1.53-36.754 144.058h-206.276l-36.97-144.906 0.89-0.752 137.746-116.54 139.522 116.61zM893.252 505.842l-84.908-73.476 36.85-105.63c29.7 53.208 47.024 114.21 48.058 179.106zM823.128 292.134l-44.864 128.966-107.984 48.776-142.28-120.43v-116.294l115.192-78.83c72.724 26.966 135.81 75.504 179.936 137.812zM132.288 546.828l107.512-93.036 100.196 45.708 39.436 154.574-40.866 77.058-139.72-1.83c-36.696-52.72-60.428-115.092-66.558-182.474zM685.438 731.13l-40.868-77.058 39.504-154.832 99.994-45.562 107.644 93.15c-6.13 67.382-29.864 129.754-66.554 182.472l-139.72 1.83zM510.514 205.34l-92.252-62.996c30-7.612 61.402-11.672 93.738-11.67 31.922 0 62.932 3.964 92.586 11.388l-94.072 63.278zM332.846 763.058l1.696 5.022 39.892 99.562c-58.478-22.702-110.022-59.408-150.464-106.012l108.876 1.428zM649.126 867.808l35.868-97.216 3.254-7.496 111.784-1.464c-40.544 46.718-92.246 83.492-150.906 106.176z"></path>
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


IosFootballOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFootballOutline.propTypes = {
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


export default IosFootballOutline
