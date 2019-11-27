import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdFemale = props => {
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
      <path d="M800 352c0-159-129-288-288-288s-288 129-288 288c0 142.8 103.8 261.2 240 284v100h-144v96h144v128h96v-128h144v-96h-144v-100c136.2-22.8 240-141.2 240-284zM320 352c0-105.8 86.2-192 192-192s192 86.2 192 192-86.2 192-192 192-192-86.2-192-192z"></path>
    </SVG>
  )
}


MdFemale.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdFemale.propTypes = {
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


export default MdFemale
