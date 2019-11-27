import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBarcode = props => {
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
      <path d="M96 256v512h832v-512h-832zM256 640h-32v-256h32v256zM384 704h-32v-384h32v384zM526 672h-32v-320h32v320zM672 704h-32v-384h32v384zM800 640h-32v-256h32v256z"></path>
    </SVG>
  )
}


IosBarcode.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBarcode.propTypes = {
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


export default IosBarcode
