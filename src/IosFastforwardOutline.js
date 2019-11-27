import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFastforwardOutline = props => {
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
      <path d="M96 310l367 202-367 201.8v-403.8zM544 311.6l352 200.4-352 200.8v-400.8zM512 256v246.4l-448-246.4v512l448-246.4v246.4l448-256-448-256z"></path>
    </SVG>
  )
}


IosFastforwardOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFastforwardOutline.propTypes = {
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


export default IosFastforwardOutline
