import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCloseCircle = props => {
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
      <path d="M512 96c-230.882 0-416 185.118-416 416 0 230.872 185.118 416 416 416 230.87 0 416-185.128 416-416 0-230.882-185.128-416-416-416zM720.004 661.762l-58.24 58.234-149.764-149.762-149.762 149.762-58.242-58.234 149.766-149.762-149.766-149.762 58.242-58.232 149.762 149.756 149.762-149.756 58.24 58.232-149.764 149.762 149.766 149.762z"></path>
    </SVG>
  )
}


MdCloseCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCloseCircle.propTypes = {
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


export default MdCloseCircle
