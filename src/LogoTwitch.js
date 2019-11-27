import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoTwitch = props => {
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
      <path d="M160 64l-64 160v608h192v128h128l128-128h160l224-224v-544h-768zM832 576l-128 128h-192.002l-127.998 128v-128h-160v-544h608v416z M640 286h96v258h-96v-258z M416 286h96v258h-96v-258z"></path>
    </SVG>
  )
}


LogoTwitch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoTwitch.propTypes = {
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


export default LogoTwitch
