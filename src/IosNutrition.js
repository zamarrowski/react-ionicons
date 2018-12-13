import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosNutrition extends Component {

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
        <path d="M718 467.24l-0.212-0.078c-0.272-0.276-0.612-0.886-0.888-1.158l-157.806-158.004c-11.696-12-28.46-20.336-47.094-20.336-23.684 0-44.348 12.336-55.416 32.336h-0.014c0 0-14.218 22.702-36.636 58.498l65.234 79.7c5.894 7.544 6.61 15.79 2.828 19.57l-0.228 0.228c-4.592 4.592-11.788 3.070-19.57-2.828l-71.934-58.878c-47.216 75.386-113.654 181.462-167.342 267.184l38.246 46.724c5.894 7.544 6.61 15.79 2.828 19.57l-0.228 0.228c-4.592 4.592-11.788 3.070-19.57-2.828l-40.44-33.1c-40.010 63.88-69.37 110.754-71.758 114.562v0.006c-6 10.132-10 22.288-10 35.364 0 35.348 28.488 64 63.836 64 15.684 0 28.766-6.796 41.256-15.016l229.684-168.39-57.942-70.79c-5.894-7.544-6.61-15.79-2.828-19.57l0.228-0.228c4.592-4.592 11.788-3.068 19.57 2.83l75.926 62.43c109.97-80.57 212.34-155.266 212.34-155.266h0.010c15.718-12 26.048-30.638 26.048-51.714 0-17.426-6.128-33.5-18.128-45.042v-0.004z M896 277.562l-32.972-55.388-132.46 76.424 98.462-170.426-55.238-32.172-139.998 242.168 57.176 57.176z"></path>
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


IosNutrition.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosNutrition.propTypes = {
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


export default IosNutrition
