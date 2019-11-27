import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSearch = props => {
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
      <path d="M689 596c30-47.2 47.6-103.2 47.6-163.4 0-168.2-136.2-304.6-304.2-304.6-168.2 0-304.4 136.4-304.4 304.6s136.2 304.6 304.2 304.6c61 0 117.8-18 165.4-48.8l13.8-9.6 217.2 217.2 67.4-68.6-217-217.2 10-14.2zM602.8 262.4c45.4 45.4 70.4 105.8 70.4 170s-25 124.6-70.4 170c-45.4 45.4-105.8 70.4-170 70.4s-124.6-25-170-70.4c-45.4-45.4-70.4-105.8-70.4-170s25-124.6 70.4-170c45.4-45.4 105.8-70.4 170-70.4s124.6 25 170 70.4z"></path>
    </SVG>
  )
}


IosSearch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSearch.propTypes = {
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


export default IosSearch
