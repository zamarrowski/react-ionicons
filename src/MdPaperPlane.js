import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPaperPlane = props => {
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
      <path d="M96 541.8l237.8 89.2 29.6 297 148.6-208 208 208 208-832-832 445.8zM685.8 793.8l-165.8-167 229.8-322.8-362.6 275.6-137.4-49.6 582-312.4-146 576.2z"></path>
    </SVG>
  )
}


MdPaperPlane.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPaperPlane.propTypes = {
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


export default MdPaperPlane
