import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosClock extends Component {

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
        <path d="M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0 162.4-162.4 162.4-426 0-588.4zM512 160c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.8 7.2-16 16-16zM207.2 336c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8zM176 528c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM229 693.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8 17.4-1.8 21.8 5.8c4.4 7.6 1.8 17.4-5.8 21.8zM357.8 811c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM352 234.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8c7.6-4.4 17.4-1.8 21.8 5.8s1.8 17.4-5.8 21.8zM512 864c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM528 539.8v228.2c0 8.8-7.2 16-16 16s-16-7.2-16-16v-228.4c-4.8-2.8-8.8-6.6-11.8-11.6-6-10.4-5.4-23 0.4-32.6l-59.2-109.8c-4.6-7.6-2-17.4 5.4-22 7.6-4.6 17.4-2 22 5.4l60 110.8c10.8 0.2 21.2 6 26.8 16 9 15.6 3.8 35-11.6 44zM688 816.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8c7.6-4.4 17.4-1.8 21.8 5.8s1.8 17.4-5.8 21.8zM693.8 229c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM816.8 688c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM811 357.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8 17.4-1.8 21.8 5.8c4.4 7.6 1.8 17.4-5.8 21.8zM848 528c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16z"></path>
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


IosClock.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosClock.propTypes = {
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


export default IosClock
