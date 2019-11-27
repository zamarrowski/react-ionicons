import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdFilm = props => {
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
      <path d="M752 128v85.334h-80v-85.334h-320v85.334h-80v-85.334h-80v768h80v-85.332h80v85.332h320v-85.332h80v85.332h80v-768h-80zM352 725.334h-80v-85.334h80v85.334zM352 554.668h-80v-85.334h80v85.334zM352 384h-80v-85.332h80v85.332zM752 725.334h-80v-85.334h80v85.334zM752 554.668h-80v-85.334h80v85.334zM752 384h-80v-85.332h80v85.332z"></path>
    </SVG>
  )
}


MdFilm.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdFilm.propTypes = {
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


export default MdFilm
