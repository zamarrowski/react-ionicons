import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdStarHalf = props => {
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
      <path d="M916 420.818l-290.534-24.952-113.466-267.866-113.486 267.868-290.514 24.95 220.384 191.048-66.062 284.134 249.678-150.628 249.66 150.628-66.042-284.132 220.382-191.050zM545.062 690.574l-33.062-19.948-0.004-378.554 69.58 164.26 178.108 15.296-135.138 117.15 40.484 174.174-119.968-72.378z"></path>
    </SVG>
  )
}


MdStarHalf.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdStarHalf.propTypes = {
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


export default MdStarHalf
