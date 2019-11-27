import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdThumbsUp = props => {
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
      <path d="M396 896h344c31.4 0 57.2-19.2 68.4-46.8l114.2-270.8c3.4-8.8 5.2-18 5.2-28v-77.2c0-42.2-34-89.2-75.6-89.2h-238.4l36-163 1.2-12c0-15.8-6.4-30.2-16.6-40.6l-40.4-40.4-252 254.6c-13.6 13.8-22 33-22 54.2v384c0 42.2 34.4 75.2 76 75.2z M96 448h128v448h-128v-448z"></path>
    </SVG>
  )
}


MdThumbsUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdThumbsUp.propTypes = {
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


export default MdThumbsUp
