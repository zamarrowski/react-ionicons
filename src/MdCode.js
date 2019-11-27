import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCode = props => {
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
      <path d="M380.8 708.2l-197-196.2 196.8-196.2-60-59.8-256.6 256 256.8 256 60-59.8zM643.2 708.2l196.8-196.2-196.8-196.2 60-59.8 256.8 256-256.8 256c0 0-60-59.8-60-59.8z"></path>
    </SVG>
  )
}


MdCode.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCode.propTypes = {
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


export default MdCode
