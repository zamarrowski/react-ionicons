import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdWine = props => {
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
      <path d="M469.334 554.666v261.334h-213.334v80h512v-80h-213.334v-261.334l341.334-341.332v-85.334h-768v85.334l341.334 341.332zM320 298.666l-85.334-85.332h554.668l-85.334 85.332h-384z"></path>
    </SVG>
  )
}


MdWine.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdWine.propTypes = {
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


export default MdWine
