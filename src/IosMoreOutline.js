import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMoreOutline = props => {
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
      <path d="M512 476c19.8 0 36 16.2 36 36s-16.2 36-36 36-36-16.2-36-36 16.2-36 36-36zM512 448c-35.4 0-64 28.6-64 64s28.6 64 64 64c35.4 0 64-28.6 64-64s-28.6-64-64-64v0z M256.8 476c19.8 0 36 16.2 36 36s-16.2 36-36 36c-19.8 0-36-16.2-36-36s16.2-36 36-36zM256.8 448c-35.4 0-64 28.6-64 64s28.6 64 64 64c35.4 0 64-28.6 64-64s-28.8-64-64-64v0z M768 476c19.8 0 36 16.2 36 36s-16.2 36-36 36-36-16.2-36-36 16.2-36 36-36zM768 448c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z"></path>
    </SVG>
  )
}


IosMoreOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMoreOutline.propTypes = {
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


export default IosMoreOutline
