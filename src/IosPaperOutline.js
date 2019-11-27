import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPaperOutline = props => {
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
      <path d="M224 96v736h32v-704h608v738.2c0 16.4-13.4 29.8-29.8 29.8h-644.4c-16.4 0-29.8-13.4-29.8-29.8v-610.2h32v-32h-64v642.2c0 34 27.6 61.8 61.8 61.8h644.6c34 0 61.8-27.6 61.8-61.8v-770.2h-672.2z M320 224h256v32h-256v-32z M320 384h480v32h-480v-32z M320 544h384v32h-384v-32z M320 704h480v32h-480v-32z"></path>
    </SVG>
  )
}


IosPaperOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPaperOutline.propTypes = {
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


export default IosPaperOutline
