import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosAppstoreOutline extends Component {

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
        <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM512 893.4c-210.2 0-381.4-171-381.4-381.4 0-210.2 171-381.4 381.4-381.4 210.2 0 381.4 171 381.4 381.4 0 210.2-171.2 381.4-381.4 381.4z M278.6 704l68.4-57.6-49.4-32.4z M684.4 596c-13.6 6.4-30.4 28-7.8 57.2 18.2 23.4 36 17.4 53 50.8 9.6-8.2 18.8-43.4 14.6-71.4-4.8-30.6-24.6-53-59.8-36.6z M503.2 379.2c3.2-5.4 1.2-12.6-4.2-15.8l-30.2-17.2c-5.6-3.2-12.6-1.2-15.8 4.2l-111.8 193.6-33.8 58.4 49.8 30 87.8-152.6 58.2-100.6z M461.2 480l-37 64h178.4l-36.2-64z M702 544h66v-64h-102z M362.2 480h-106.2v64h69.2z M649.2 480l-120-211.6c-3.2-5.6-10.4-7.4-15.8-4.2l-30.2 17.2c-5.6 3.2-7.4 10.2-4.2 15.8l140 247.4 1-0.6 48.8-29.6-19.6-34.4z M686.4 544l-9.8-17.4-49.6 30 26 46 49.8-30.2z"></path>
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


IosAppstoreOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAppstoreOutline.propTypes = {
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


export default IosAppstoreOutline
