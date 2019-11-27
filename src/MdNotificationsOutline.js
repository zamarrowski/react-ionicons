import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdNotificationsOutline = props => {
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
      <path d="M514 240.942c14.166 0 47.822 8.958 47.822 8.958 91.178 20.894 155.356 104.878 155.356 199.7v255.224l34.218 34.374h-478.792l34.218-34.374v-255.224c0-94.82 64.178-178.806 155.356-199.7 0 0 36.086-8.958 47.822-8.958zM512 96c-35.204 0-62.118 27.036-62.118 62.4v29.118c-118.030 27.046-207.060 135.202-207.060 262.082v228.8l-82.822 83.2v41.6h704v-41.6l-82.822-83.2v-228.8c0-126.88-89.032-235.036-207.060-262.082v-29.118c0-35.364-26.914-62.4-62.118-62.4v0zM594.822 844.8h-165.646c0 45.762 37.266 83.2 82.824 83.2s82.822-37.438 82.822-83.2v0z"></path>
    </SVG>
  )
}


MdNotificationsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdNotificationsOutline.propTypes = {
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


export default MdNotificationsOutline
