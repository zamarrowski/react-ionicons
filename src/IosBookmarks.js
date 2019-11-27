import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBookmarks = props => {
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
      <path d="M685.8 330.8l18.2-12.8 18.2 12.8 45.8 29v-231.8c-41.4 0-89 0-128 0v231.8l45.8-29z M864 128c0 0-26.6 0-64 0v293l-96-64-96 64v-293c-24.2 0-41.2 0-44.8 0-16.2 0-35.2 14.4-35.2 30s0 658 0 658l-16 11-16-11c0 0 0-644 0-658s-18.4-30-35.2-30-300.8 0-300.8 0c-37.6 0-66 26.6-66 64v572.2c0 37.6 28.4 67.8 66 67.8 0 0 259 0 286.6 0s49.4 8.4 49.4 38.8c0 18.2 0 25.2 0 25.2h32c0 0 0-6.8 0-25.2 0-30.6 21.8-38.8 49.4-38.8s286.6 0 286.6 0c37.6 0 66-30.2 66-67.8v-572.2c0-37.4-28.4-64-66-64z"></path>
    </SVG>
  )
}


IosBookmarks.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBookmarks.propTypes = {
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


export default IosBookmarks
