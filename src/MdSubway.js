import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdSubway = props => {
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
      <path d="M512 96c-187.728 0-352 21.336-352 170.668v426.664c0 83.208 66.124 149.332 149.334 149.332l-53.334 53.336v32h512v-32l-53.334-53.336c83.208 0 149.334-66.124 149.334-149.332v-426.664c0-149.332-164.272-170.668-352-170.668zM320 768c-36.272 0-64-27.73-64-64 0-36.274 27.728-64 64-64s64 27.726 64 64c0 36.27-27.728 64-64 64zM480 480h-224v-192h224v192zM704 768c-36.272 0-64-27.73-64-64 0-36.274 27.728-64 64-64s64 27.726 64 64c0 36.27-27.728 64-64 64zM768 480h-224v-192h224v192z"></path>
    </SVG>
  )
}


MdSubway.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdSubway.propTypes = {
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


export default MdSubway
