import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosWarning = props => {
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
      <path d="M512 128l-416 768h832l-416-768zM488.4 416h48v131.4l-12 140.6h-24l-12-140.6v-131.4zM512 800c-17.6 0-32-14.4-32-32s14.4-32 32-32c17.6 0 32 14.4 32 32s-14.4 32-32 32z"></path>
    </SVG>
  )
}


IosWarning.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosWarning.propTypes = {
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


export default IosWarning
