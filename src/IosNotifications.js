import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosNotifications = props => {
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
      <path d="M415.6 800c0 52 43.2 95.8 96.2 95.8s96.2-43.8 96.2-95.8h-192.4z M747.8 458.4c0-198-98-265.6-189.8-281 0-1.2 0.2-2.2 0.2-3.4 0-25.4-20.6-46-46-46s-46 20.6-46 46c0 1.2 0 2.4 0.2 3.6-91.8 15.6-189.8 83.8-189.8 281.4-0.4 231-45.4 245-116.6 309h704c-70.8-64-116.2-78.2-116.2-309.6z"></path>
    </SVG>
  )
}


IosNotifications.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosNotifications.propTypes = {
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


export default IosNotifications
