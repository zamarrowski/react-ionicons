import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFlame = props => {
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
      <path d="M447.8 96c51.4 269.2-193.4 263.8-191.8 534.8 1.4 222 210 297.2 256.2 297.2 46.4 0 227.8-48.2 253.8-297.2 21.4-202.8-144.8-416-318.2-534.8zM512.2 913.2c0 0-81.4-66.6-81.4-148.6s81.2-148.6 81.2-148.6 80.6 66.6 80.6 148.6c-0 82-80.4 148.6-80.4 148.6z"></path>
    </SVG>
  )
}


IosFlame.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFlame.propTypes = {
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


export default IosFlame
