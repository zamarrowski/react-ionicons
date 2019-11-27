import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMic = props => {
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
      <path d="M512 640c75.424 0 137.142-61.848 137.142-137.428v-301.144c0-75.58-61.718-137.428-137.142-137.428s-137.142 61.848-137.142 137.428v301.144c0 75.58 61.718 137.428 137.142 137.428zM754.278 489.096c0 137.428-116.564 233.63-242.278 233.63s-242.278-96.204-242.278-233.63h-77.722c0 155.746 123.438 286.306 274.288 306.93v163.974h91.426v-163.974c150.848-22.904 274.286-151.184 274.286-306.93h-77.722z"></path>
    </SVG>
  )
}


MdMic.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMic.propTypes = {
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


export default MdMic
