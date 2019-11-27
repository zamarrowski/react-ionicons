import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosArchiveOutline = props => {
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
      <path d="M575.6 480c17.6 0 32.2 14.4 32.2 32s-14 32-31.8 32h-128c-17.6 0-32-14.4-32-32s14.4-32 32-32h126zM576 448h-128c-35.2 0-64 28.8-64 64s28.8 64 64 64h128c35.2 0 64-28.8 64-64s-28.8-64-64-64v0z M832 224h-640v160h32v416h576v-416h32v-160zM768 768h-512v-384h512v384zM800 352h-576v-96h576v96z"></path>
    </SVG>
  )
}


IosArchiveOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArchiveOutline.propTypes = {
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


export default IosArchiveOutline
