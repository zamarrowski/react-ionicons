import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFiling = props => {
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
      <path d="M512 576c-59.6 0-109.8-40.8-124-96h-228v288h704v-288h-228c-14.2 55.2-64.4 96-124 96z M737 256h-1v160h-32v-160h-384v160h-32v-160h-1l-127 192h256c0 53 43 96 96 96s96-43 96-96h256l-127-192z"></path>
    </SVG>
  )
}


IosFiling.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFiling.propTypes = {
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


export default IosFiling
