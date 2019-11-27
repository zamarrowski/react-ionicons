import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBatteryFull = props => {
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
      <path d="M676.4 153.6h-74.8v-89.6h-179.2v89.6h-74.8c-32.8 0-59.6 26.8-59.6 59.6v686.8c0 33.2 26.8 60 59.6 60h328.4c33.2 0 60-26.8 60-59.6v-687.2c0-32.8-26.8-59.6-59.6-59.6z"></path>
    </SVG>
  )
}


MdBatteryFull.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBatteryFull.propTypes = {
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


export default MdBatteryFull
