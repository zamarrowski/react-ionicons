import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosArchive = props => {
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
      <path d="M224 800h576v-384h-576v384zM448 480h128c17.6 0 32 14.4 32 32s-14.4 32-32 32h-128c-17.6 0-32-14.4-32-32s14.4-32 32-32z M192 224v160h640v-160z"></path>
    </SVG>
  )
}


IosArchive.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArchive.propTypes = {
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


export default IosArchive
