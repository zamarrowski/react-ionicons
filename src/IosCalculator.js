import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCalculator = props => {
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
      <path d="M736 128h-448c-35.4 0-64 28.6-64 64v640c0 35.4 28.6 64 64 64h448c35.4 0 64-28.6 64-64v-640c0-35.4-28.6-64-64-64zM720 560v256h-96v-256h96zM720 400v96h-96v-96h96zM560 720v96h-96v-96h96zM560 560v96h-96v-96h96zM560 400v96h-96v-96h96zM400 720v96h-96v-96h96zM400 560v96h-96v-96h96zM400 400v96h-96v-96h96zM304 304v-96h416v96h-416z"></path>
    </SVG>
  )
}


IosCalculator.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCalculator.propTypes = {
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


export default IosCalculator
