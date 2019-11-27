import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdArrowRoundDown = props => {
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
      <path d="M198.8 569.8l268 276.2c11.6 12 27.4 18 44.8 18h0.8c17.4 0 33.2-6 44.8-18l268-276.2c25-24 25-62.6 0-86.4s-65.4-23.8-90.4 0l-158.8 166v-428c0-33.8-28.6-61.2-64-61.2-36 0-64 27.4-64 61.2v428l-158.8-166c-25-23.8-65.4-23.8-90.4 0s-25 62.4 0 86.4z"></path>
    </SVG>
  )
}


MdArrowRoundDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdArrowRoundDown.propTypes = {
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


export default MdArrowRoundDown
