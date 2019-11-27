import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCamera = props => {
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
      <path d="M638 560c0 69.588-56.412 126-126 126s-126-56.412-126-126c0-69.588 56.412-126 126-126s126 56.412 126 126z M880 192h-176l-64-64h-256l-64 64h-176c-44.184 0-80 35.816-80 80v544c0 44.184 35.816 80 80 80h736c44.184 0 80-35.816 80-80v-544c0-44.184-35.816-80-80-80zM512 784c-123.71 0-224-100.29-224-224s100.29-224 224-224 224 100.29 224 224-100.29 224-224 224z"></path>
    </SVG>
  )
}


MdCamera.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCamera.propTypes = {
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


export default MdCamera
