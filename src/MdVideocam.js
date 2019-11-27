import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdVideocam = props => {
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
      <path d="M768 439v-170.4c0-26.8-22.4-48.6-49.8-48.6h-604.4c-27.4-0-49.8 21.8-49.8 48.6v486.6c0 26.8 22.4 48.8 49.8 48.8h604.4c27.4 0 49.8-22 49.8-48.6v-170.4l192 194.6v-535.2l-192 194.6z"></path>
    </SVG>
  )
}


MdVideocam.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdVideocam.propTypes = {
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


export default MdVideocam
