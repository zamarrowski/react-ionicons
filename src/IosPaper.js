import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPaper = props => {
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
      <path d="M224 96v736h-32v-608h-64v642.2c0 34 27.6 61.8 61.8 61.8h644.6c34 0 61.8-27.6 61.8-61.8v-770.2h-672.2zM320 224h256v32h-256v-32zM320 544h384v32h-384v-32zM800 736h-480v-32h480v32zM800 416h-480v-32h480v32z"></path>
    </SVG>
  )
}


IosPaper.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPaper.propTypes = {
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


export default IosPaper
