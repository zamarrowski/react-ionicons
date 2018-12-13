import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPulseOutline extends Component {

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
        <path d="M896 576c-30.536 0-56.058 21.39-62.446 50h-118.008l-60.362-181.792c-2.21-6.658-8.492-11.086-15.518-10.956-7.016 0.144-13.118 4.844-15.048 11.59l-108.484 378.638-116.35-698.11c-1.248-7.48-7.574-13.056-15.152-13.358-7.618-0.278-14.322 4.764-16.156 12.122l-124.98 501.866h-179.496v32h192c7.348 0 13.75-5.004 15.526-12.132l109.37-439.182 115.322 691.946c1.23 7.376 7.406 12.918 14.874 13.344 0.306 0.018 0.614 0.026 0.918 0.026 7.098 0 13.398-4.7 15.374-11.594l113.744-396.992 47.69 143.626c2.174 6.542 8.292 10.958 15.186 10.958h130.584c7.78 26.578 32.322 46 61.416 46 35.348 0 64-28.654 64-64s-28.656-64-64.004-64z"></path>
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


IosPulseOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPulseOutline.propTypes = {
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


export default IosPulseOutline
