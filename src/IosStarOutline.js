import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosStarOutline = props => {
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
      <path d="M960 414h-342.8l-105.2-318.2-105.2 318.2h-342.8l280.4 195.8-109.2 318.2 276.8-197.2 276.8 197.2-109.4-318.2 280.6-195.8zM725.2 842.4l-213.2-152-213.2 152 85.2-245-216-149.4h262l82-246.6 82 246.6h262l-216 149.2 85.2 245.2z"></path>
    </SVG>
  )
}


IosStarOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosStarOutline.propTypes = {
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


export default IosStarOutline
