import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCloudDownloadOutline extends Component {

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
        <path d="M354.236 723.86l-23.232 23.206 180.996 180.934 181.162-180.884-23.232-23.208-141.39 141.268v-449.176h-32.86v449.176z M826.024 324.226c-13.732-128.436-117.942-228.226-250.024-228.226-89.676 0-173.070 45.624-218.792 115.43-15.892-7.318-33.566-11.43-52.208-11.43-68.416 0-123.962 54.974-124.954 123.154-69.862 22.072-116.046 85.162-116.046 156.846 0 87.812 71.188 160 159 160h193v-32h-193c-70.028 0-127-57.696-127-128 0-28.544 8.886-54.094 25.7-77.2 16.942-23.28 40.452-40.308 67.988-49.008l22.020-7.020 0.336-23.124c0.358-24.548 10.186-47.59 27.674-64.85 17.502-17.274 40.688-26.792 65.284-26.792 13.52 0 26.58 2.856 38.82 8.492l25.046 11.532 15.11-23.066c41.614-63.536 115.714-101.464 191.524-101.464 55.626 0 104.96 20.53 146.18 57.808 40.932 37.020 66.688 87.474 72.526 142.070l2.606 24.376 24.214 3.83c29.454 4.658 56.506 19.844 76.174 42.762 19.86 23.142 30.798 51.174 30.798 81.654 0 70.304-56.972 128-127 128h-193v32h193c87.812 0 159-72.188 159-160 0-79.296-58.054-143.768-133.976-155.774z"></path>
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


IosCloudDownloadOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudDownloadOutline.propTypes = {
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


export default IosCloudDownloadOutline
