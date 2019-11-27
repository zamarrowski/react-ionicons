import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdNotifications = props => {
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
      <path d="M512 928c45.558 0 82.822-37.438 82.822-83.2h-165.646c-0 45.762 37.266 83.2 82.824 83.2zM781.178 678.4v-228.8c0-126.88-89.032-235.036-207.060-262.082v-29.118c0-35.364-26.914-62.4-62.118-62.4s-62.118 27.036-62.118 62.4v29.118c-118.030 27.046-207.060 135.202-207.060 262.082v228.8l-82.822 83.2v41.6h704v-41.6l-82.822-83.2z"></path>
    </SVG>
  )
}


MdNotifications.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdNotifications.propTypes = {
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


export default MdNotifications
