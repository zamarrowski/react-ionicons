import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCalendarOutline = props => {
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
      <path d="M704 192v-64h-32v64h-320v-64h-32v64h-192v704h768v-704h-192zM864 864h-704v-480h704v480zM864 352h-704v-128h160v64h32v-64h320v64h32v-64h160v128z"></path>
    </SVG>
  )
}


IosCalendarOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCalendarOutline.propTypes = {
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


export default IosCalendarOutline
