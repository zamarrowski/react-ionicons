import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdClose = props => {
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
      <path d="M810 273.596l-59.596-59.596-238.404 238.404-238.404-238.404-59.596 59.596 238.404 238.404-238.404 238.404 59.596 59.596 238.404-238.404 238.404 238.404 59.596-59.596-238.404-238.404z"></path>
    </SVG>
  )
}


MdClose.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdClose.propTypes = {
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


export default MdClose
