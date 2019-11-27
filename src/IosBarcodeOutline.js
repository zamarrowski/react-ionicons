import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBarcodeOutline = props => {
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
      <path d="M96 768h160v-32h-128v-448h128v-32h-160z M768 256v32h128v448h-128v32h160v-512z M224 384h32v256h-32v-256z M768 384h32v256h-32v-256z M640 320h32v384h-32v-384z M352 320h32v384h-32v-384z M494 352h32v320h-32v-320z"></path>
    </SVG>
  )
}


IosBarcodeOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBarcodeOutline.propTypes = {
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


export default IosBarcodeOutline
