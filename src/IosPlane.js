import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPlane = props => {
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
      <path d="M448 144h-96l118 311.4-253.6 8.6-88.4-112h-64l64 160-64 160h64l89.8-115.4 252.2 10.4-118 313h96l196.4-309 135.6 3c6.6 0.4 13.2 0.2 20 0.2 88.4 0 160-28.8 160-64.2s-71.6-64-160-64c-6.8 0-13.4 0.2-20 0.4l-135.6 4.4-196.4-306.8z"></path>
    </SVG>
  )
}


IosPlane.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPlane.propTypes = {
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


export default IosPlane
