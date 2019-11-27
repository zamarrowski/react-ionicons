import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCloudy = props => {
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
      <path d="M472 192c-140 0-255.6 119.4-255.6 261.6 0 8.6 0.6 17.2 1.6 25.6-86.4 7.8-154 88-154 176.8 0 94 75.8 176 169.2 176h515.6c116.6 0 211.2-98.8 211.2-216s-94.6-217.6-211.2-217.6c-4.6 0-9.6-0.4-14.4-0.4-4.2 0-8.4 0-12.2 0.2-23.6-107-110.2-206.2-250.2-206.2v0z"></path>
    </SVG>
  )
}


IosCloudy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudy.propTypes = {
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


export default IosCloudy
