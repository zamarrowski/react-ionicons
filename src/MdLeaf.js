import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdLeaf = props => {
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
      <path d="M832 575.2c0-333.4-320-511.2-320-511.2s-320 177.8-320 511.2c0 237.6 162.6 281 256 286.4v98.4h128v-98.6c93.4-5.2 256-48.6 256-286.2z"></path>
    </SVG>
  )
}


MdLeaf.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdLeaf.propTypes = {
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


export default MdLeaf
