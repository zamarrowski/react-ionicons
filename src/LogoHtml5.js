import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoHtml5 = props => {
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
      <path d="M128 64l69.872 806.426 313.666 89.574 314.49-89.708 69.972-806.292h-768zM743.994 328h-368l7.982 102h352.016l-27.010 302.772-197 56.188-197.364-55.952-13.528-155.008h96.508l6.846 78.574 107.538 29.562 106.844-29.83 11.148-128.306h-334.002l-25.142-299.178 481.578 0.032-8.414 99.146z"></path>
    </SVG>
  )
}


LogoHtml5.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoHtml5.propTypes = {
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


export default LogoHtml5
