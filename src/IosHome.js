import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosHome = props => {
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
      <path d="M512 224l-320 256v416h224v-256h192v256h224v-416l-320-256z M512 128l-192 153.6v-89.6h-128v191.998l-64 50.998 23.020 22.768 360.98-288.784 360.98 288.786 23.020-22.77-384-306.996z"></path>
    </SVG>
  )
}


IosHome.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHome.propTypes = {
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


export default IosHome
