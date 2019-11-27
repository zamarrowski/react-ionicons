import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdFolderOpen = props => {
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
      <path d="M874.668 288h-362.656l-85.336-96h-277.344c-46.938 0-85.332 38.396-85.332 85.334v469.332c0 46.938 38.394 85.334 85.332 85.334h725.336c46.938 0 85.332-38.396 85.332-85.334v-373.332c0-46.938-38.394-85.334-85.332-85.334zM896 746.666c0 11.564-9.77 21.334-21.332 21.334h-725.336c-11.564 0-21.332-9.77-21.332-21.334v-394.666h746.668c11.562 0 21.332 9.77 21.332 21.334v373.332z"></path>
    </SVG>
  )
}


MdFolderOpen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdFolderOpen.propTypes = {
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


export default MdFolderOpen
