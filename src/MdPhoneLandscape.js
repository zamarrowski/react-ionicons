import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPhoneLandscape = props => {
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
      <path d="M960 717.712v-411.426c0-45.262-36.652-82.286-81.456-82.286h-733.088c-44.804 0-81.456 37.024-81.456 82.286v411.426c0 45.264 36.652 82.288 81.456 82.288h733.090c44.802 0 81.454-37.024 81.454-82.288zM224 728v-432h576v432h-576z"></path>
    </SVG>
  )
}


MdPhoneLandscape.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPhoneLandscape.propTypes = {
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


export default MdPhoneLandscape
