import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoYen = props => {
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
      <path d="M896 64h-160l-224 442.256-224-442.256h-160l224.736 416h-96.736v96h147.128l28.872 62v34h-176v96h176v192h160v-192h176v-96h-176v-34l29.782-62h146.218v-96h-96.578l224.578-416z"></path>
    </SVG>
  )
}


LogoYen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoYen.propTypes = {
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


export default LogoYen
