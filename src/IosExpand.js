import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosExpand = props => {
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
      <path d="M184 160h200v-32h-256v256h32v-200l265.8 264 22.2-22.2z M840 160h-200v-32h256v256h-32v-200l-265.8 264-22.2-22.2z M184 864h200v32h-256v-256h32v200l265.8-264 22.2 22.2z M840 864h-200v32h256v-256h-32v200l-265.8-264-22.2 22.2z"></path>
    </SVG>
  )
}


IosExpand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosExpand.propTypes = {
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


export default IosExpand
