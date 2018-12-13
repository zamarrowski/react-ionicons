import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdAlarm extends Component {

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
        <path d="M940 249.674l-196.886-163.56-55.628 65.862 196.884 163.538 55.63-65.84zM334.384 149.838l-55.652-65.838-194.732 165.674 55.628 65.838 194.756-165.674zM533.402 345.256h-64.202v254.892l203.298 121.078 32.102-53.106-171.2-99.834v-223.030zM512 175.33c-214 0-385.202 172.042-385.202 382.332 0 210.298 171.202 382.338 385.202 382.338 211.872 0 385.202-172.040 385.202-382.338 0-210.288-173.33-382.332-385.202-382.332zM512 855.040c-164.786 0-299.6-133.812-299.6-297.376 0-163.554 134.814-297.368 299.6-297.368 164.788 0 299.6 133.812 299.6 297.368 0 165.678-134.812 297.376-299.6 297.376z"></path>
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


MdAlarm.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdAlarm.propTypes = {
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


export default MdAlarm
