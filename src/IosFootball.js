import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosFootball extends Component {

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
        <path d="M512 96c-229.726 0-416 186.272-416 416s186.274 416 416 416c229.744 0 416-186.276 416-416s-186.26-416-416-416zM594.302 884.358c-27.028 5.314-60.654 8.374-88 8.9-26.396-0.39-52.148-3.47-77-8.986-4.288-1.098-8.766-2.276-13.61-3.554l-48.834-130.87 39.29-77.848h211.708l1.14 2.152 38.68 77.704-47.236 128.564c-5.334 1.428-10.716 2.738-16.138 3.938zM379.156 154.56l114.844 78.592v116.294l-141.994 120.134-107.14-48.818-44.664-128.038c44.018-62.408 106.276-111.064 178.954-138.164zM823.128 292.134l-44.864 128.966-107.984 48.776-142.28-120.43v-116.294l115.192-78.83c72.724 26.966 135.81 75.504 179.936 137.812zM132.288 546.828l107.512-93.036 100.196 45.708 39.436 154.574-40.866 77.058-139.72-1.83c-36.696-52.72-60.428-115.092-66.558-182.474zM685.438 731.13l-40.868-77.058 39.504-154.832 99.994-45.562 107.644 93.15c-6.13 67.382-29.864 129.754-66.554 182.472l-139.72 1.83z"></path>
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


IosFootball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFootball.propTypes = {
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


export default IosFootball
