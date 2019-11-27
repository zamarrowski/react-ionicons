import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMore = props => {
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
      <path d="M512 448c-35.4 0-64 28.6-64 64s28.6 64 64 64c35.4 0 64-28.6 64-64s-28.6-64-64-64v0z M256.8 448c-35.4 0-64 28.6-64 64s28.6 64 64 64c35.4 0 64-28.6 64-64s-28.8-64-64-64v0z M768 448c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z"></path>
    </SVG>
  )
}


IosMore.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMore.propTypes = {
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


export default IosMore
