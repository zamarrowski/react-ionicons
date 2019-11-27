import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPlane = props => {
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
      <path d="M896 672v-80l-320-208v-225.6c0-35.366-29.64-62.4-64-62.4-34.358 0-64 27.036-64 62.4v225.6l-320 208v80l320-96v227.204l-96 62.398v62.398l160-32 160 32v-62.398l-96-62.398v-227.204l320 96z"></path>
    </SVG>
  )
}


MdPlane.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPlane.propTypes = {
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


export default MdPlane
