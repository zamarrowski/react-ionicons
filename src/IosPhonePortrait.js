import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosPhonePortrait extends Component {

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
        <path d="M671.4 64h-317.2c-36.6 0-66.2 29.2-66.2 65.8v762c0 36.8 29.6 68.2 66.2 68.2h317c36.6 0 64.6-31.4 64.6-68.2v-762c0.2-36.6-27.8-65.8-64.4-65.8zM482 110h60c4.4 0 8 3.6 8 8s-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8s3.6-8 8-8zM513 938c-19.2 0-34.8-15.6-34.8-34.8s15.6-34.8 34.8-34.8c19.2 0 34.8 15.6 34.8 34.8s-15.6 34.8-34.8 34.8zM704 848h-384v-682h384v682z M513 883.2c-11 0-20 9-20 19.8 0 11 9 20 20 20s20-9 20-20c-0.2-10.8-9-19.8-20-19.8z"></path>
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


IosPhonePortrait.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPhonePortrait.propTypes = {
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


export default IosPhonePortrait
