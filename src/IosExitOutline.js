import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosExitOutline = props => {
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
      <path d="M256 448h32v-224h576v576h-576v-224h-32v256h640v-640h-640z M595.8 386.2l23.2-23.2 149 149-149 149-23.2-23.2 109.4-109.4h-577.2v-32.8h577.2z"></path>
    </SVG>
  )
}


IosExitOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosExitOutline.propTypes = {
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


export default IosExitOutline
