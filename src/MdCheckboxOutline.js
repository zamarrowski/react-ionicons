import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCheckboxOutline = props => {
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
      <path d="M337.062 430.938l-59.728 59.728 192 192 426.666-426.666-59.728-59.728-366.938 364.79-132.272-130.124zM810.666 810.666h-597.332v-597.332h426.666v-85.334h-426.666c-46.938 0-85.334 38.396-85.334 85.334v597.332c0 46.938 38.396 85.334 85.334 85.334h597.332c46.938 0 85.334-38.396 85.334-85.334v-341.332h-85.334v341.332z"></path>
    </SVG>
  )
}


MdCheckboxOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCheckboxOutline.propTypes = {
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


export default MdCheckboxOutline
