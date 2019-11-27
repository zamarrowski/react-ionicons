import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPint = props => {
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
      <path d="M128 96l85.8 758.4c5.2 41.6 41 73.6 85 73.6h426.6c44 0 79.8-32 85-73.6l85.6-758.4h-768zM782 345.6h-540l-18.8-166.4h577.2l-18.4 166.4z"></path>
    </SVG>
  )
}


MdPint.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPint.propTypes = {
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


export default MdPint
