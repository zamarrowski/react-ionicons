import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBackspace = props => {
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
      <path d="M790 192h-330c-93.4 0-146.4 69.4-204 127s-144.2 149.4-144.2 149.4c-9.8 11.2-15.8 25.6-15.8 41.8 0 16 6 30.6 15.8 42 0 0 68.6 75.2 144.2 151 75.6 75.6 113.4 129 204 129h330c77 0 138-65 138-142v-360.2c0-77-61-138-138-138zM730.8 668l-127.2-126.8-126.6 126.2-29-29 126.6-126.4-126.6-126.2 29.2-29.2 126.6 126.4 127.2-127 29.2 29.2-127.4 126.8 127.2 127-29.2 29z"></path>
    </SVG>
  )
}


IosBackspace.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBackspace.propTypes = {
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


export default IosBackspace
