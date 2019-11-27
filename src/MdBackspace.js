import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBackspace = props => {
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
      <path d="M867 192h-532.6c-24.4 0-43.6 12.4-56.4 31.2l-192 288.8 192 288.4c12.8 18.8 32 31.6 56.4 31.6h532.4c39 0 71-32 71-71.2v-497.6c0.2-39.2-31.8-71.2-70.8-71.2zM760.4 639.6l-50 50.2-127.4-127.6-127.4 127.6-50-50.2 127.4-127.6-127.4-127.6 50-50.2 127.4 127.6 127.4-127.6 50 50.2-127.4 127.6 127.4 127.6z"></path>
    </SVG>
  )
}


MdBackspace.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBackspace.propTypes = {
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


export default MdBackspace
