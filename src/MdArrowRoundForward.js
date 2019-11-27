import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdArrowRoundForward = props => {
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
      <path d="M569.8 825.2l276.2-268c12-11.6 18-27.4 18-44.8v-0.8c0-17.4-6-33.2-18-44.8l-276.2-268c-24-25-62.6-25-86.4 0s-23.8 65.4 0 90.4l166 158.8h-428c-34-0-61.4 28.6-61.4 64 0 36 27.4 64 61.2 64h428l-166 158.8c-23.8 25-23.8 65.4 0 90.4 24 25 62.6 25 86.6 0z"></path>
    </SVG>
  )
}


MdArrowRoundForward.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdArrowRoundForward.propTypes = {
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


export default MdArrowRoundForward
