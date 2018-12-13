import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPintOutline extends Component {

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
        <path d="M736 350.4c0-39-2-163.4-38.6-231.2-9-16.4-25-23.2-63.4-23.2h-244c-38.6 0-54.4 6.8-63.4 23.2-36.6 67.8-38.6 193-38.6 232 0 182 64 186.2 64 335.6 0 73.4-32 133.4-32 185.4 0 50.2 18 55.6 64 55.6h256c46 0 64-5.8 64-55.8 0-52-32-111.4-32-184.8 0-149.4 64-154.8 64-336.8zM354.8 134c1-1.8 1.4-2 4-3 4-1.6 12.8-3 31.2-3h244c18.2 0 27 1.4 31.2 3 2.8 1 3.2 1.4 4.2 3.2 14.2 26.2 24.4 67.6 30 119.8h-374.6c5.6-52.2 15.8-94 30-120zM669.6 893.2c-2.8 1.2-10.4 2.8-29.6 2.8h-256c-19.2 0-26.8-1.6-29.8-2.8-0.8-1.8-2.2-7.6-2.2-21 0-19.6 6-42.4 12.8-68.6 9-34 19.2-72.6 19.2-116.6 0-77-16.2-119.6-31.8-160.8-16.6-43.8-32.2-85.4-32.2-175 0-22.8 0.8-44.6 2-65h380c1.4 20.4 2 42 2 64.4 0 89.6-15.6 131.4-32.4 175.6-15.6 41.4-31.6 84.2-31.6 161.2 0 44 10.2 82.4 19.2 116.2 7 26.2 12.8 49 12.8 68.6 0 13.4-1.6 19.2-2.4 21z"></path>
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


IosPintOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPintOutline.propTypes = {
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


export default IosPintOutline
