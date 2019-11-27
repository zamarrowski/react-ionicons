import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPhonePortrait = props => {
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
      <path d="M717.712 64h-411.426c-45.262 0-82.286 36.652-82.286 81.456v733.090c0 44.802 37.024 81.454 82.286 81.454h411.426c45.264 0 82.288-36.652 82.288-81.456v-733.088c0-44.804-37.024-81.456-82.288-81.456zM728 800h-432v-576h432v576z"></path>
    </SVG>
  )
}


MdPhonePortrait.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPhonePortrait.propTypes = {
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


export default MdPhonePortrait
