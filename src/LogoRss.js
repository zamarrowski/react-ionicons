import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoRss = props => {
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
      <path d="M239.8 672.2c-61.6 0-111.8 50.2-111.8 111.6 0 61.6 50.2 111.2 111.8 111.2 61.8 0 111.8-49.8 111.8-111.2s-50-111.6-111.8-111.6z M128 384v159.8c96 0 188.2 28.4 256 96.2s96 159.8 96 256h160c0-279.8-232-512-512-512z M128 128v159.8c342 0 607.8 266 607.8 608.2h160.2c0-423.4-344-768-768-768z"></path>
    </SVG>
  )
}


LogoRss.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoRss.propTypes = {
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


export default LogoRss
