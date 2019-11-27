import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdEye = props => {
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
      <path d="M512 210c-203.6 0-376.8 124.8-448 302 71.2 177.2 244.4 302 448 302s376.8-124.8 448-302c-71.2-177.2-244.4-302-448-302zM512 713.4c-112 0-203.6-90.6-203.6-201.4s91.6-201.4 203.6-201.4 203.6 90.6 203.6 201.4-91.6 201.4-203.6 201.4zM512 391.2c-67.2 0-122.2 54.4-122.2 120.8s55 120.8 122.2 120.8 122.2-54.4 122.2-120.8-55-120.8-122.2-120.8z"></path>
    </SVG>
  )
}


MdEye.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdEye.propTypes = {
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


export default MdEye
