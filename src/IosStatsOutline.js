import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosStatsOutline = props => {
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
      <path d="M352 896h128v-768h-128v768zM384 160h64v704h-64v-704z M160 896h128v-320h-128v320zM192 608h64v256h-64v-256z M544 896h128v-448h-128v448zM576 480h64v384h-64v-384z M736 256v640h128v-640h-128zM832 864h-64v-576h64v576z"></path>
    </SVG>
  )
}


IosStatsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosStatsOutline.propTypes = {
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


export default IosStatsOutline
