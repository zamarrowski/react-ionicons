import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdLaptop = props => {
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
      <path d="M874.668 832c46.938 0 85.332-38.394 85.332-85.332v-533.332c0-46.938-38.394-85.336-85.332-85.336h-725.336c-46.938 0-85.332 38.398-85.332 85.336v533.332c0 46.938 38.394 85.332 85.332 85.332h-149.332c0 46.938 128 64 192 64h640c64 0 192-17.062 192-64h-149.332zM149.332 213.336h725.336v543.996h-725.336v-543.996zM512 869.332c-23.458 0-42.666-19.208-42.666-42.668 0-23.458 19.208-42.664 42.666-42.664s42.666 19.208 42.666 42.664c0 23.46-19.208 42.668-42.666 42.668z"></path>
    </SVG>
  )
}


MdLaptop.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdLaptop.propTypes = {
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


export default MdLaptop
