import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdArrowRoundBack = props => {
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
      <path d="M802.8 448h-428l166-158.8c23.8-25 23.8-65.4 0-90.4s-62.4-25-86.4 0l-276.4 268c-12 11.6-18 27.4-18 44.8v0.8c0 17.4 6 33.2 18 44.8l276.2 268c24 25 62.6 25 86.4 0s23.8-65.4 0-90.4l-166-158.8h428c33.8 0 61.2-28.6 61.2-64 0.2-36-27.2-64-61-64z"></path>
    </SVG>
  )
}


MdArrowRoundBack.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdArrowRoundBack.propTypes = {
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


export default MdArrowRoundBack
