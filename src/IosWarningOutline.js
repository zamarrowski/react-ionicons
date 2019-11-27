import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosWarningOutline = props => {
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
      <path d="M512 736c-17.6 0-32 14.4-32 32s14.4 32 32 32c17.6 0 32-14.4 32-32s-14.4-32-32-32z M488.4 547.4v-131.4h48v131.4l-12 140.6h-24l-12-140.6z M512 195l362.4 669h-724.8l362.4-669zM512 128l-416 768h832l-416-768z"></path>
    </SVG>
  )
}


IosWarningOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosWarningOutline.propTypes = {
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


export default IosWarningOutline
