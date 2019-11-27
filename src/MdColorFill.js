import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdColorFill = props => {
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
      <path d="M273 155.4l74 134-283 282 368.8 356.6 304.8-297.2 108.8-22.8-513.6-512-59.8 59.4zM641 571.4h-411.2l205.6-204.6 205.6 204.6z M846.6 608c0 0-113.4 123-113.4 184.2 0 61.4 50.8 111 113.4 111s113.4-49.8 113.4-111c0-61.2-113.4-184.2-113.4-184.2z"></path>
    </SVG>
  )
}


MdColorFill.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdColorFill.propTypes = {
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


export default MdColorFill
