import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdThumbsDown = props => {
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
      <path d="M628 128h-344c-31.4 0-57.2 19.2-68.4 46.8l-114.4 270.8c-3.4 8.8-5.2 18-5.2 28v77.2c0 42.2 34 89.2 75.6 89.2h238.6l-36 163-1.2 12c0 15.8 6.4 30.2 16.6 40.6l40 40.2 252.4-254.4c13.6-13.8 22-33 22-54.2v-384c0-42.2-34.4-75.2-76-75.2z M800 128h128v448h-128v-448z"></path>
    </SVG>
  )
}


MdThumbsDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdThumbsDown.propTypes = {
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


export default MdThumbsDown
