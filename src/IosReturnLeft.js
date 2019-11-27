import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosReturnLeft = props => {
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
      <path d="M137.4 584.6l115.2 114.8c3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6c6.2-6.2 6.2-16.4 0-22.6l-99.4-100.8h576c79.2 0 144-64.8 144-144v-112h-32v112c0 29.8-11.6 57.8-33 79-21.2 21.2-49.4 33-79 33h-576l103.2-100.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-119.2 118.8c-12.6 12.4-12.6 32.6 0 45.2z"></path>
    </SVG>
  )
}


IosReturnLeft.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosReturnLeft.propTypes = {
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


export default IosReturnLeft
