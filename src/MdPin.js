import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPin = props => {
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
      <path d="M512 64c-176.008 0-320 141.114-320 313.602 0 235.198 320 582.398 320 582.398s320-347.2 320-582.398c0-172.488-143.992-313.602-320-313.602zM512 489.602c-63.992 0-114.288-49.29-114.288-112 0-62.714 50.294-112 114.288-112s114.288 49.286 114.288 112c0 62.71-50.296 112-114.288 112z"></path>
    </SVG>
  )
}


MdPin.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPin.propTypes = {
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


export default MdPin
