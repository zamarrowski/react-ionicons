import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoYahoo = props => {
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
      <path d="M769.2 136.8c-22.6 0-45-1.6-65.2-8.8l-192 320-192-320c-20.2 7.2-41.4 8.8-64 8.8-22.2 0-44.2-1.8-64-8.8l256 425.4v342.6c20-7 41.6-8.8 64-8.8s44 1.8 64 8.8v-342l256-426c-19.8 6.8-40.6 8.8-62.8 8.8z"></path>
    </SVG>
  )
}


LogoYahoo.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoYahoo.propTypes = {
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


export default LogoYahoo
