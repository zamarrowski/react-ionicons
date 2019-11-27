import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosJet = props => {
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
      <path d="M928 96c0 0-39.6 2.8-106.2 54.4-31 24-324.4 241.2-324.4 241.2l-319.4-15.8-82 73 204 102.4-16 20.2-163.2 8.2-13.4 67.2 121.2 94.4-53.4 107.2 107.4-53 94.6 121.2 67.2-13.4 8.2-163.2 20.2-15.8 102.4 203.8 73-81.8-15.8-319.4c0 0 217.2-293.4 241.2-324 51.8-67.2 54.4-106.8 54.4-106.8z"></path>
    </SVG>
  )
}


IosJet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosJet.propTypes = {
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


export default IosJet
