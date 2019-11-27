import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPizza = props => {
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
      <path d="M814.4 260.8c-93-37.8-194.8-56.8-302.4-56.8-107.8 0-216.6 20.6-302.4 56-16.2 6.6-30.6 18-20.2 39s322.4 661 322.4 661l322-659.8c6.4-13.8 1.8-30.8-19.4-39.4zM372.4 408c-37.4 0-64-28.6-64-64s26.6-64 64-64c37.4 0 64 28.6 64 64s-26.6 64-64 64zM512 694c-37.4 0-64-28.6-64-64s26.6-64 64-64c37.4 0 64 28.6 64 64s-26.6 64-64 64zM651.6 448c-37.4 0-64-28.6-64-64s26.6-64 64-64c37.4 0 64 28.6 64 64s-26.6 64-64 64z M873.8 132c-104.4-41.2-233.2-68-361.8-68s-255.2 24.2-361.8 66.8c-9.4 3.8-22.2 11.2-22.2 27.6l19.4 48.2c5.6 9.8 17.4 16.4 30.2 16.4 3.6 0 8.6-0.6 14.6-3 98-37.8 206.2-59.2 320-59.2s230.4 23.2 320 59.2c7.2 2.8 11.2 3 14.6 3 13.2 0 24.4-6.6 30-16.2l19.6-48.2c-0.4-14.6-10-21.6-22.6-26.6z"></path>
    </SVG>
  )
}


MdPizza.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPizza.propTypes = {
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


export default MdPizza
