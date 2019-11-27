import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdArrowRoundUp = props => {
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
      <path d="M825.2 454.2l-268-276.2c-11.6-12-27.4-18-44.8-18h-0.8c-17.4 0-33.2 6-44.8 18l-268 276.2c-25 24-25 62.6 0 86.4s65.4 23.8 90.4 0l158.8-166v428c0 33.8 28.6 61.2 64 61.2 36 0 64-27.4 64-61.2v-428l158.8 166c25 23.8 65.4 23.8 90.4 0s25-62.4 0-86.4z"></path>
    </SVG>
  )
}


MdArrowRoundUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdArrowRoundUp.propTypes = {
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


export default MdArrowRoundUp
