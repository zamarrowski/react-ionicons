import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMore = props => {
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
      <path d="M592 272c0-44.004-35.996-80-80-80s-80 35.996-80 80 35.996 80 80 80 80-35.996 80-80zM592 752c0-44.004-35.996-80-80-80s-80 35.996-80 80 35.996 80 80 80 80-35.996 80-80zM592 512c0-44.004-35.996-80-80-80s-80 35.996-80 80 35.996 80 80 80 80-35.996 80-80z"></path>
    </SVG>
  )
}


MdMore.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMore.propTypes = {
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


export default MdMore
