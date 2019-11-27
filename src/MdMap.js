import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMap = props => {
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
      <path d="M874.666 128c-4.352 0-8.792 2.738-18.352 6.414s-216.314 83.19-216.314 83.19l-256-89.604-241.062 81.062c-8.544 2.146-14.938 10.666-14.938 21.332v644.272c0 12.792 8.542 21.334 21.332 21.334 3.656 0 13.010-4.66 18.174-6.638s216.494-82.968 216.494-82.968l256 89.606 241.062-81.062c8.542-2.146 14.938-10.668 14.938-21.334v-644.272c0-12.79-8.542-21.332-21.334-21.332zM640 810.666l-256-89.604v-507.73l256 89.606v507.728z"></path>
    </SVG>
  )
}


MdMap.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMap.propTypes = {
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


export default MdMap
