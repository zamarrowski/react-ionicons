import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdAlbums = props => {
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
      <path d="M309.4 928h533.4c47 0 85.4-38.4 85.4-85.4v-533.2c0-47-38.4-85.4-85.4-85.4h-533.4c-47 0-85.4 38.4-85.4 85.4v533.4c0 46.8 38.4 85.2 85.4 85.2z M181.4 96h533.4c47 0 85.4 38.4 85.4 85.4v10.6h-522.8c-47 0-85.4 38.4-85.4 85.4v522.6h-10.6c-47 0-85.4-38.4-85.4-85.4v-533.2c0-47 38.4-85.4 85.4-85.4z"></path>
    </SVG>
  )
}


MdAlbums.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdAlbums.propTypes = {
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


export default MdAlbums
