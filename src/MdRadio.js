import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRadio = props => {
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
      <path d="M147.6 283.8c-30.4 12-51.6 43.6-51.6 79v512c0 47 37 85.4 83.2 85.4h665.6c46.2 0 83.2-38.4 83.2-85.4v-512c0-47.4-37-85.4-83.2-85.4h-486.8l343.6-142.6-28.2-70.8-525.8 219.8zM320 876c-70.8 0-128-57.2-128-128s57.2-128 128-128 128 57.2 128 128-57.2 128-128 128zM832 533.4h-64v-92.4h-89.6v92.4h-486.4v-170.6h640v170.6z"></path>
    </SVG>
  )
}


MdRadio.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRadio.propTypes = {
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


export default MdRadio
