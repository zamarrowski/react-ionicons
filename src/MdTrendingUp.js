import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdTrendingUp = props => {
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
      <path d="M691.2 256l102.6 102.6-218.6 218.8-179.2-179.2-332 332.6 63.2 63.2 268.8-269 179.2 179.4 282.2-282 102.6 102.6v-269h-268.8z"></path>
    </SVG>
  )
}


MdTrendingUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdTrendingUp.propTypes = {
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


export default MdTrendingUp
