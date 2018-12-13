import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTennisballOutline extends Component {

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
        <path d="M928 512c0-229.726-186.26-416-416-416-229.726 0-416 186.272-416 416 0 229.726 186.274 416 416 416 5.082 0 10.136-0.124 15.174-0.304 0.958-0.034 1.914-0.068 2.87-0.11 1.884-0.080 3.768-0.166 5.646-0.272 1.7-0.094 3.396-0.208 5.094-0.322 1.278-0.088 2.558-0.16 3.834-0.26 2.708-0.208 5.41-0.442 8.11-0.704 0-0.006 0-0.012 0-0.018 194.94-18.948 350.458-172.458 372.548-366.446 0.040-0.002 0.076 0 0.114-0.002 1.208-10.63 2.004-21.334 2.392-32.1-0.032 0.002-0.064 0.002-0.098 0.002 0.19-5.132 0.316-10.282 0.316-15.464zM893.33 512c0 5.136-0.132 10.242-0.334 15.328-47.278-2.152-93.354-12.212-137.232-30.010-51.582-20.916-97.876-51.662-137.594-91.382-39.72-39.72-70.466-86.014-91.384-137.594-17.806-43.912-27.87-90.028-30.012-137.34 5.054-0.2 10.126-0.33 15.228-0.33 210.258-0.002 381.328 171.066 381.328 381.328zM130.674 512c0-2.636 0.046-5.262 0.1-7.884 44.952 2.758 88.776 12.674 130.6 29.634 51.582 20.916 97.876 51.662 137.596 91.382 39.72 39.718 70.464 86.014 91.382 137.596 16.948 41.792 26.86 85.584 29.628 130.498-2.656 0.054-5.312 0.102-7.98 0.102-210.26-0-381.328-171.068-381.326-381.328zM551.886 891.246c-6.546-105.132-49.948-208.396-130.29-288.738-80.372-80.372-183.68-123.778-288.854-130.3 18.344-176.106 157.040-316.956 332.148-338.626 5.19 107.28 48.72 213.050 130.652 294.98 81.898 81.904 187.622 125.426 294.866 130.644-21.706 175.030-162.494 313.658-338.522 332.040z"></path>
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


IosTennisballOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTennisballOutline.propTypes = {
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


export default IosTennisballOutline
