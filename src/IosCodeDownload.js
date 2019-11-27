import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCodeDownload = props => {
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
      <path d="M640 320.4l27.6-26.4 228.4 218-228.4 218-27.6-26.4 200.8-191.6z M384 320.4l-27.6-26.4-228.4 218 228.4 218 27.6-26.4-200.8-191.6z M637.8 511l23.2 23.2-149 137-149-137 23.2-23.2 109.4 97.4v-255.6h32.8v255.6z"></path>
    </SVG>
  )
}


IosCodeDownload.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCodeDownload.propTypes = {
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


export default IosCodeDownload
