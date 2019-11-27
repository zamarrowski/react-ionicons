import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPrint = props => {
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
      <path d="M799.9 320h-575.8c-70.452 0-128.1 57.606-128.1 128v277.334h159.798v170.666h512.402v-170.666h159.8v-277.334c0-70.394-57.65-128-128.1-128zM704 832h-384v-256h384v256zM768.202 128h-512.404v160h512.402v-160z"></path>
    </SVG>
  )
}


MdPrint.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPrint.propTypes = {
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


export default MdPrint
