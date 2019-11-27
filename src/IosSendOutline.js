import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSendOutline = props => {
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
      <path d="M192 499.2l233.2 102.6 114.4 230.2 292.4-640-640 307.2zM456.2 593l311.4-332.4-229.2 497.8-82.2-165.4zM763.6 256.6l-330 314.2-165.6-72.8 495.6-241.4z"></path>
    </SVG>
  )
}


IosSendOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSendOutline.propTypes = {
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


export default IosSendOutline
