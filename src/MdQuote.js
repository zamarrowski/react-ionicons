import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdQuote = props => {
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
      <path d="M192.8 832h154.2l101.8-193.2v-446.8h-320v446.8h154.2l-90.2 193.2zM640.8 832h154.2l100-193.2v-446.8h-318.2v446.8h164l-100 193.2z"></path>
    </SVG>
  )
}


MdQuote.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdQuote.propTypes = {
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


export default MdQuote
