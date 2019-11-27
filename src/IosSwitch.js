import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSwitch = props => {
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
      <path d="M735 544h-446c-106.6 0-193 86.4-193 193s86.4 191 193 191h446c106.6 0 193-84.4 193-191s-86.4-193-193-193zM288 864c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128c0 70.6-57.4 128-128 128z M289 480h446c106.6 0 193-84.4 193-191s-86.4-193-193-193h-446c-106.6 0-193 86.4-193 193s86.4 191 193 191zM736 160c70.6 0 128 57.4 128 128s-57.4 128-128 128-128-57.4-128-128c0-70.6 57.4-128 128-128z"></path>
    </SVG>
  )
}


IosSwitch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSwitch.propTypes = {
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


export default IosSwitch
