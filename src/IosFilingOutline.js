import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFilingOutline = props => {
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
      <path d="M737 256h-450l-127 192v320h704v-320l-127-192zM826.8 448h-90.8v-136l90.8 136zM320 288h384v160h-96c0 53-43 96-96 96s-96-43-96-96h-96v-160zM288 312v136h-90.8l90.8-136zM832 736h-640v-256h196c14.2 55.2 64.4 96 124 96s109.8-40.8 124-96h196v256z"></path>
    </SVG>
  )
}


IosFilingOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFilingOutline.propTypes = {
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


export default IosFilingOutline
