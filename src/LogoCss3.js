import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoCss3 = props => {
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
      <path d="M512.564 678.976v0z M128 64l69.892 806.438 313.642 89.562 314.518-89.7 69.948-806.3h-768zM709.352 733.796l-197.214 56.25-196.916-56.496-13.494-155.55h96.506l6.866 79.124 107.172 30.326 0.264 0.546h0.068l106.934-29.704 11.224-128.292h-224.762l-8-100h241.292l8.792-102h-368.084l-8-98h481.16l-43.808 503.796z"></path>
    </SVG>
  )
}


LogoCss3.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoCss3.propTypes = {
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


export default LogoCss3
