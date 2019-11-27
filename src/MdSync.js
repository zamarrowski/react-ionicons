import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdSync = props => {
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
      <path d="M512 186.18v-122.18l-160 162.908 160 162.912v-122.186c131.992 0 240 109.964 240 244.366 0 40.726-10 79.428-28.008 114.032l58.008 59.062c31.992-50.914 50-109.976 50-173.094 0-179.198-144.004-325.82-320-325.82zM512 756.368c-132.002 0-240-109.976-240-244.368 0-40.726 10-79.418 27.998-114.040l-57.998-59.052c-32.002 48.872-50 109.964-50 173.092 0 179.198 144.004 325.82 320 325.82v122.18l160-162.906-160-162.914v122.188z"></path>
    </SVG>
  )
}


MdSync.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdSync.propTypes = {
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


export default MdSync
