import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCard = props => {
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
      <path d="M864 224h-704c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h704c35.2 0 64-28.8 64-64v-448c0-35.2-28.8-64-64-64zM160 256h704c17.6 0 32 14.4 32 32v64h-768v-64c0-17.6 14.4-32 32-32zM864 768h-704c-17.6 0-32-14.4-32-32v-224h768v224c0 17.6-14.4 32-32 32z M192 640h64v32h-64v-32z M320 640h384v32h-384v-32z"></path>
    </SVG>
  )
}


IosCard.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCard.propTypes = {
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


export default IosCard
