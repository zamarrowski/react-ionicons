import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdWater = props => {
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
      <path d="M761 326.6l-249-262.6-249 262.6c-137.2 144.8-137.2 380 0 524.8 68.6 72.4 158.8 108.6 249 108.6s180.4-36.2 249-108.6c137.4-144.8 137.4-380 0-524.8z"></path>
    </SVG>
  )
}


MdWater.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdWater.propTypes = {
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


export default MdWater
