import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMailOpen = props => {
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
      <path d="M634 610.8l136 154.6-4 4-157.6-139-96.2 73.4-96.8-73.4-157.4 139-4-4 135.8-154.4-261.8-198v483h768v-485.2z M384 428h-178.6l306.6 235.6 308.8-235.6h-180.8v-6.4l256-29.8v-7.8l-384-256-384 256v8.4l256 29.2z"></path>
    </SVG>
  )
}


IosMailOpen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMailOpen.propTypes = {
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


export default IosMailOpen
