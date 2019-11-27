import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdDesktop = props => {
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
      <path d="M874.666 64h-725.332c-46.938 0-85.334 38.394-85.334 85.332v565.334c0 46.938 38.396 85.334 85.334 85.334h277.332l-85.332 96v64h341.332v-64l-85.332-96h277.332c46.938 0 85.334-38.396 85.334-85.334v-565.334c0-46.938-38.396-85.332-85.334-85.332zM874.666 640h-725.332v-490.668h725.332v490.668z"></path>
    </SVG>
  )
}


MdDesktop.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdDesktop.propTypes = {
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


export default MdDesktop
