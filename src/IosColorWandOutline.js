import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosColorWandOutline = props => {
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
      <path d="M384 299.4l-68 68 512.2 512.2 67.8-68-512-512.2zM425.2 431.4l22.8-22.8 403 403-22.8 22.8-403-403z M368 128h32v80h-32v-80z M368 536h32v80h-32v-80z M560 352h80v32h-80v-32z M128 352h80v32h-80v-32z M200.223 211.181l22.627-22.627 56.568 56.568-22.627 22.627-56.568-56.568z M256.8 477.050l22.627 22.627-56.568 56.568-22.627-22.627 56.568-56.568z M545.154 188.548l22.627 22.627-56.568 56.568-22.627-22.627 56.568-56.568z"></path>
    </SVG>
  )
}


IosColorWandOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosColorWandOutline.propTypes = {
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


export default IosColorWandOutline
