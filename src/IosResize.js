import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosResize = props => {
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
      <path d="M880 128h-224c-8.8 0-16 7.2-16 16s7.2 16 16 16h184l-680 679.8v-183.8c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-8-16-16.8-16h-183.2l680-680v184c0 8.8 7.2 16 16 16s16-7.2 16-16v-224c0-8.8-7.2-16-16-16z"></path>
    </SVG>
  )
}


IosResize.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosResize.propTypes = {
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


export default IosResize
