import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosQuote = props => {
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
      <path d="M418 192h-160c-35.4 0-66 26.6-66 62v320c0 35.4 30.6 66 66 66h124c0 128-92 192-92 192h128c0 0 62-67.2 62-194 0-91.4 0-283.6 0-384 0-35.4-26.6-62-62-62v0z M770 192h-160c-35.4 0-66 26.6-66 62v320c0 35.4 30.6 66 66 66h124c0 128-92 192-92 192h128c0 0 62-67.2 62-194 0-91.4 0-283.6 0-384 0-35.4-26.6-62-62-62v0z"></path>
    </SVG>
  )
}


IosQuote.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosQuote.propTypes = {
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


export default IosQuote
