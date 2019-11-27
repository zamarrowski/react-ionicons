import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosReturnRight = props => {
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
      <path d="M886.6 584.6l-115.2 114.8c-3.2 3.2-7.2 4.6-11.4 4.6s-8.2-1.6-11.4-4.6c-6.2-6.2-6.2-16.4 0-22.6l99.4-100.8h-576c-79.2 0-144-64.8-144-144v-112h32v112c0 29.8 11.6 57.8 33 79 21.2 21.2 49.4 33 79 33h576l-103.2-100.8c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l119.2 118.8c12.6 12.4 12.6 32.6 0 45.2z"></path>
    </SVG>
  )
}


IosReturnRight.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosReturnRight.propTypes = {
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


export default IosReturnRight
