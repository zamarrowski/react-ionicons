import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPaperPlane = props => {
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
      <path d="M928 96l-832 445.8 221 95 595.2-524.4-482.8 586.6-2.2 174.8 83.2-115.8 233.6 170z M339.2 660.6l56.2 259.4h0.8v-1l5.8-237.4 300.6-350.2z"></path>
    </SVG>
  )
}


IosPaperPlane.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPaperPlane.propTypes = {
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


export default IosPaperPlane
