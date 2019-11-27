import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdGlasses = props => {
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
      <path d="M960 352h-896v96h22l10 43c32 135 81 181 192 181s192-34.8 192-181v-43c0 0 3-32 32-32s32 32 32 32v43.6c0 146 84.2 180.4 194 180.4s158-50 190-180.4l10-43.6h22v-96z"></path>
    </SVG>
  )
}


MdGlasses.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGlasses.propTypes = {
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


export default MdGlasses
