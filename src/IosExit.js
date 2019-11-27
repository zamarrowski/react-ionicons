import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosExit = props => {
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
      <path d="M256 192v303.6h449.2l-109.4-109.4 23.2-23.2 149 149-149 149-23.2-23.2 109.4-109.4h-449.2v303.6h640v-640z M128 495.6h128v32.8h-128v-32.8z"></path>
    </SVG>
  )
}


IosExit.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosExit.propTypes = {
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


export default IosExit
