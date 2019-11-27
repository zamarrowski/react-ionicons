import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPin = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M512 96c-159 0-288 119.8-288 267.4 0 208 288 564.6 288 564.6s288-356.6 288-564.6c0-147.6-129-267.4-288-267.4zM512 477.8c-51.8 0-93.8-42-93.8-93.8s42-93.8 93.8-93.8 93.8 42 93.8 93.8-42 93.8-93.8 93.8z"></path>
    </SVG>
  )
}


IosPin.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPin.propTypes = {
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


export default IosPin
