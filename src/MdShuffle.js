import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdShuffle = props => {
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
      <path d="M444.4 376.2l-248.8-248.2-67.6 67.6 248.2 248.2 68.2-67.6zM632 128l98 98-602 602.4 67.6 67.6 602.4-602 98 98v-264h-264zM647.8 579.6l-67.6 67.6 150.2 150.2-98.4 98.6h264v-264l-98 98c0 0-150.2-150.4-150.2-150.4z"></path>
    </SVG>
  )
}


MdShuffle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdShuffle.propTypes = {
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


export default MdShuffle
