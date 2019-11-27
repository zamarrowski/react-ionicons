import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdHelp = props => {
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
      <path d="M578 896h-132v-130h132v130zM576 700h-128c0-202 192-190.2 192-318 0-70.4-57.6-126.8-128-126.8s-128 60.8-128 128.8h-128c0-142 114.6-256 256-256s256 112.8 256 254c0 159.8-192 178-192 318z"></path>
    </SVG>
  )
}


MdHelp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdHelp.propTypes = {
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


export default MdHelp
