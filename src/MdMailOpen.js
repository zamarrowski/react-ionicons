import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMailOpen = props => {
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
      <path d="M960 403.334c0-29.866-14.938-57.606-40.542-72.532l-407.458-202.802-407.458 202.802c-23.48 14.926-40.542 42.666-40.542 72.532v407.332c0 46.938 38.394 85.334 85.332 85.334h725.336c46.938 0 85.332-38.396 85.332-85.334v-407.332zM512 608l-342.738-224 342.738-170.666 342.738 170.666-342.738 224z"></path>
    </SVG>
  )
}


MdMailOpen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMailOpen.propTypes = {
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


export default MdMailOpen
