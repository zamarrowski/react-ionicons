import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBriefcase = props => {
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
      <path d="M704 288v-79.2c0-44.8-36-80.8-80.8-80.8h-222.4c-44.8 0-80.8 36-80.8 80.8v79.2h-224v527.2c0 44.8 36 80.8 80.8 80.8h670.4c44.8 0 80.8-36 80.8-80.8v-527.2h-224zM624 288h-224v-80h224v80z"></path>
    </SVG>
  )
}


MdBriefcase.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBriefcase.propTypes = {
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


export default MdBriefcase
