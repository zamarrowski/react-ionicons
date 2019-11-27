import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdTrain = props => {
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
      <path d="M160 693.332c0 83.208 66.124 149.332 149.334 149.332l-53.334 53.336v32h512v-32l-53.334-53.336c83.208 0 149.334-66.124 149.334-149.332v-426.664c0-149.332-164.272-170.668-352-170.668s-352 21.336-352 170.668v426.664zM512 752c-44.004 0-80-35.994-80-79.998s35.996-80.002 80-80.002 80 35.998 80 80.002-35.996 79.998-80 79.998zM768 448h-512v-192h512v192z"></path>
    </SVG>
  )
}


MdTrain.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdTrain.propTypes = {
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


export default MdTrain
