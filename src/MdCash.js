import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCash = props => {
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
      <path d="M64 192v512h896v-512h-896zM385 640h-160.8c0-53.2-43-96.2-96.2-96.2v-159.8c70.6 0 128-57.4 128-128h129c-39.8 47-65 115.6-65 192s25.2 145 65 192zM896 543.8c-52 0-96 43-96 96.2h-161c39.8-47 65-115.6 65-192s-25.2-145-65-192h129c0 70.6 57.4 128 128 128v159.8z M64 768h896v64h-896v-64z"></path>
    </SVG>
  )
}


MdCash.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCash.propTypes = {
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


export default MdCash
