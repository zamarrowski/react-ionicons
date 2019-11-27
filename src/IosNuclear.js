import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosNuclear = props => {
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
      <path d="M608 544c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z M960 544h-320c0 47.8-26.2 89.4-65.2 111.4l156.4 272.6c135-77.2 228.8-217.4 228.8-384z M512 416c23.4 0 45.4 6.4 64.2 17.4l161.2-276.6c-66.2-38.6-143.2-60.8-225.4-60.8-82.4 0-159.8 22.4-226.2 61.2l159.6 277.6c19.4-12 42.2-18.8 66.6-18.8z M384 544h-320c0 166.6 93.8 306.8 228.8 384l156.4-272.6c-39-22-65.2-63.6-65.2-111.4z"></path>
    </SVG>
  )
}


IosNuclear.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosNuclear.propTypes = {
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


export default IosNuclear
