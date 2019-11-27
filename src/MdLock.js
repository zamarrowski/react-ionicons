import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdLock = props => {
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
      <path d="M752 372h-40v-80c0-110-90-200-200-200s-200 90-200 200v80h-40c-44.004 0-80 35.996-80 80v400c0 44.004 35.996 80 80 80h480c44.004 0 80-35.996 80-80v-400c0-44.004-35.996-80-80-80zM512 736c-44.004 0-80-35.996-80-80s35.996-80 80-80 80 35.996 80 80-35.996 80-80 80zM636.004 372h-248.008v-80c0-68.008 56.006-124.004 124.004-124.004 68.008 0 124.004 55.996 124.004 124.004v80z"></path>
    </SVG>
  )
}


MdLock.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdLock.propTypes = {
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


export default MdLock
