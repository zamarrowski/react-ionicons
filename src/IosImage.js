import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosImage = props => {
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
      <path d="M895.6 128.4l-767.6-0.4v768h768v-768l-0.4 0.4zM864 864h-704v-704h704v704z M832 192h-640v512h640v-512zM608.4 319.6c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32c0-17.8 14.4-32 32-32zM307 672l141.4-201 141.6 201h-283zM629.2 672.2v0l-51.8-73.8 44.6-63.2 96.4 137h-89.2z"></path>
    </SVG>
  )
}


IosImage.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosImage.propTypes = {
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


export default IosImage
