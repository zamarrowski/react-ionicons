import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosBugOutline extends Component {

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
        <path d="M912 512c-9.2 0-18 2.6-25.2 7.2-10.8-4.8-28.8-10.6-54.8-12.2-0.6-55.4-11-108-29.2-155.4 17-12.6 31.6-28.8 42.6-47.6 0.8 0 1.8 0 2.6 0 26.4 0 48-21.4 48-48s-21.4-48-48-48c-26.4 0-48 21.4-48 48 0 14 6 26.6 15.6 35.4-6 9.6-14.6 20.2-26 29.8-55-115.4-158.8-193.2-277.6-193.2s-222.6 77.8-277.8 193c-11.4-9.6-19.8-20.2-25.8-29.8 9.6-8.8 15.6-21.4 15.6-35.4 0-26.6-21.4-48-48-48s-48 21.4-48 48c0 26.6 21.4 48 48 48 0.8 0 1.8 0 2.6 0 11.2 18.8 25.6 35 42.6 47.6-18.2 47.4-28.6 100-29.2 155.6-26.2 1.6-44 7.4-54.8 12.2-7.4-4.6-16-7.2-25.2-7.2-26.6 0-48 21.4-48 48s21.4 48 48 48 48-21.4 48-48c0-5-0.8-9.8-2.2-14.4 8-2.6 19.6-5.4 35-6.6 4.6 78 28.4 149.6 66 207.8-12 9-29.2 26-39.8 53.4-24.2 2.6-43 23-43 47.8 0 26.6 21.4 48 48 48s48-21.4 48-48c0-16.8-8.6-31.4-21.6-40 7.8-18 19-29 26.8-35 55 71.4 132.4 117.4 218.8 122.6 2.4 0.2 4.4 0.2 6.4 0.2 0.6 0 1.4 0 2 0 2.4 0 4.8 0.2 7.4 0.2 0 0 0 0 0 0s0 0 0 0 0 0 0 0c2.6 0 5 0 7.4-0.2 0.6 0 1.4 0 2 0 2 0 4.2-0.2 6.6-0.2v0c86.4-5.2 163.8-51.4 218.8-122.6 7.8 6 19 17 27 35.2-13 8.6-21.6 23.4-21.6 40 0 26.6 21.4 48 48 48 26.4 0 48-21.4 48-48 0-24.8-18.8-45.2-43-47.8-10.8-27.6-27.8-44.4-39.8-53.6 37.6-58.2 61.4-129.8 66-207.6 15.4 1 27 3.8 35 6.6-1.4 4.6-2.2 9.4-2.2 14.4 0 26.6 21.4 48 48 48s48-21.4 48-48-21.4-48.2-48-48.2zM848.2 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-8.8 0-16-7.2-16-16s7-16 16-16zM176 272c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM112 576c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM224 864c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM800.2 832c8.8 0 16 7.2 16 16s-7.2 16-16 16c-8.8 0-16-7.2-16-16s7.2-16 16-16zM512 160c88.8 0 168.4 49.4 221.4 127-11 18.8-24.4 36.4-40.4 52.2-48.4 48.4-112.6 75-181 75s-132.6-26.6-181-75c-15.8-15.8-29.4-33.4-40.4-52.2 53-77.6 132.6-127 221.4-127zM224 512c0-71.8 17.8-138.8 48-194.4 49 73.4 130.8 123.2 224 128.2v417.8c-151.4-10.4-272-164-272-351.6zM528 863.4v-417.6c93-5.2 175-54.8 224-128.2 30.4 55.8 48 122.6 48 194.6 0 187.4-120.6 341-272 351.2zM912 576c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16z"></path>
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


IosBugOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBugOutline.propTypes = {
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


export default IosBugOutline
