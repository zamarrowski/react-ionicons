import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBuild = props => {
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
      <path d="M948.2 796.4l-370-372.4c36.6-94 16.2-204.6-61-282.2-81.4-81.8-203.4-98.2-301-53.2l174.8 176-122 122.8-179-176c-48.6 98-28.2 220.8 53 302.6 77.2 77.8 187 98.2 280.6 61.4l370 372.4c16.2 16.4 40.6 16.4 57 0l93.6-94c20.4-16.6 20.4-45.2 4-57.4z"></path>
    </SVG>
  )
}


MdBuild.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBuild.propTypes = {
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


export default MdBuild
