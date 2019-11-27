import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCalculatorOutline = props => {
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
      <path d="M288 320h448v-128h-448v128zM320 224h384v64h-384v-64z M736 128h-448c-35.4 0-64 28.6-64 64v640c0 35.4 28.6 64 64 64h448c35.4 0 64-28.6 64-64v-640c0-35.4-28.6-64-64-64zM768 832c0 17.6-14.4 32-32 32h-448c-17.6 0-32-14.4-32-32v-640c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v640z M320 480v-96h-32v128h128v-32h-32z M320 640v-96h-32v128h128v-32h-32z M320 800v-96h-32v128h128v-32h-32z M480 480v-96h-32v128h128v-32h-32z M640 480v-96h-32v128h128v-32h-32z M480 640v-96h-32v128h128v-32h-32z M480 800v-96h-32v128h128v-32h-32z M640 800v-256h-32v288h128v-32h-32z"></path>
    </SVG>
  )
}


IosCalculatorOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCalculatorOutline.propTypes = {
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


export default IosCalculatorOutline
