import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdConstruct extends Component {

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
        <path d="M861.8 786.8l-382.2-380.4c31.8-81.2 14.2-176.4-53.2-243.4-70.8-70.6-177-84.6-262-45.8l152.2 151.6-106.2 105.8-155.8-151.6c-42.2 84.6-24.6 190.4 46.2 261 67.2 67 162.8 84.6 244.2 53l28.8 28.6-210.4 210.4c-15.2 11.4-15.2 38 3.8 53.2l87.6 87.4c15.2 15.2 38.2 15.2 53.4 0l192.2-224.8 226.8 225.8c14.2 14.2 35.4 14.2 49.6 0l81.4-81.2c17.8-14.2 17.8-39 3.6-49.6z M988.8 433.2l-69-68.2c-4.4-4.4-11.6-4.4-16 0l-7.4 7.4-37-31.6c0 0 2.4-20-9.8-37.4-12.4-17.4-32.2-39.6-46.4-53.8-14.2-14-68.2-67.8-139.4-102.8-71.4-35.4-121.8-50.8-181.8-50.8v59.4c0 0 57.4 33.2 90.2 59.4 32.6 26.2 33.6 119 33.6 119l-57 57 113 112.2 62-72.6c25.8-7 47.6-7.6 60.4-0.6l27.4 26.6-19.2 19c-4.4 4.4-4.4 11.4 0 15.8l69 68.2c4.4 4.4 11.6 4.4 16 0l111.4-110.4c4.2-4.4 4.2-11.6 0-15.8z"></path>
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


MdConstruct.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdConstruct.propTypes = {
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


export default MdConstruct
