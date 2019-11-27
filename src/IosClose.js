import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosClose = props => {
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
      <path d="M680.4 320l-168.8 168.6-168-167.8-23.6 23.6 168 167.6-168 167.8 23.6 23.4 168-167.6 168.8 168.4 23.6-23.4-168.8-168.6 168.8-168.4z"></path>
    </SVG>
  )
}


IosClose.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosClose.propTypes = {
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


export default IosClose
