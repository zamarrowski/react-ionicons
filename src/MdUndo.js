import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdUndo = props => {
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
      <path d="M524.6 359.2c-115.8 0-220.6 43.2-301.4 113.6l-159.2-152.8v384h395l-158.2-153.6c60.8-50.6 138-82.2 223.6-82.2 154.6 0 286.2 96.4 332 235.6l103.6-29.6c-60.8-182.8-232.4-315-435.4-315z"></path>
    </SVG>
  )
}


MdUndo.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdUndo.propTypes = {
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


export default MdUndo
