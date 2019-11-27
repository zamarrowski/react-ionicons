import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdText = props => {
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
      <path d="M816 128h-624c-44.004 0-64 35.996-64 80v688l128-128h560c44.004 0 80-35.996 80-80v-480c0-44.004-35.996-80-80-80zM396.8 484h-76.8v-80h76.8v80zM550.4 484h-76.8v-80h76.8v80zM704 484h-76.8v-80h76.8v80z"></path>
    </SVG>
  )
}


MdText.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdText.propTypes = {
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


export default MdText
