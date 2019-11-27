import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosRepeat = props => {
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
      <path d="M664.6 327.4l-67.2-66.8c-3.2-3.2-7.2-4.6-11.4-4.6s-8.2 1.6-11.4 4.6c-6.2 6.2-6.2 16.4 0 22.6l53.4 52.8h-356c-79.2 0-144 64.8-144 144v48h32v-48c0-29.8 11.6-57.8 33-79 21.2-21.2 49.4-33 79-33h352l-53.2 52.8c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l71.2-70.8c12.6-12.4 12.6-32.6 0-45.2z M864.2 496v48c0 29.8-11.6 57.8-33 79-21.4 21.4-49.4 33-79.2 33h-352l53.2-52.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-71.2 70.8c-12.6 12.4-12.6 32.6 0 45.2l67.2 66.8c3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6c6.2-6.2 6.2-16.4 0-22.6l-53.2-52.8h356c79.2 0 144-64.8 144-144v-48h-32z"></path>
    </SVG>
  )
}


IosRepeat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRepeat.propTypes = {
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


export default IosRepeat
