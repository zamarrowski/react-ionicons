import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBatteryDead = props => {
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
      <path d="M768 288h-608c-35.2 0-64 28.8-64 64v320c0 35.2 28.8 64 64 64h608c35.2 0 64-28.8 64-64v-320c0-35.2-28.8-64-64-64zM800 672c0 17.6-14.4 32-32 32h-608c-17.6 0-32-14.4-32-32v-320c0-17.6 14.4-32 32-32h608c17.6 0 32 14.4 32 32v320z M864 401.2v221.6c38.2-22.2 64-63.4 64-110.8s-25.8-88.6-64-110.8z"></path>
    </SVG>
  )
}


IosBatteryDead.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBatteryDead.propTypes = {
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


export default IosBatteryDead
