import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdWatch = props => {
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
      <path d="M832 512c0-102.002-48.008-192.002-121.992-250l-38.008-230h-320l-38.008 230c-73.984 57.998-121.992 147.998-121.992 250 0 101.992 48.008 191.992 121.992 250l38.008 230h320l38.008-230c73.984-58.008 121.992-148.008 121.992-250zM272 512c0-132.002 108.008-240 240-240s240 107.998 240 240c0 131.992-108.008 240-240 240s-240-108.008-240-240z"></path>
    </SVG>
  )
}


MdWatch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdWatch.propTypes = {
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


export default MdWatch
