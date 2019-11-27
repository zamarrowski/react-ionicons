import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCompass = props => {
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
      <path d="M512 462.716c-26.884 0-49.286 22.4-49.286 49.284s22.4 49.286 49.286 49.286 49.286-22.4 49.286-49.286-22.402-49.284-49.286-49.284zM512 64c-246.4 0-448 201.6-448 448s201.6 448 448 448 448-201.6 448-448-201.6-448-448-448zM610.568 610.568l-367.368 170.232 170.232-367.358 367.368-170.242-170.232 367.368z"></path>
    </SVG>
  )
}


MdCompass.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCompass.propTypes = {
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


export default MdCompass
