import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosVolumeDown = props => {
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
      <path d="M660.8 639.8c27-35.8 43.2-79.8 43.2-127.8s-16.2-92-43.2-127.8l-26.6 19.6c22.8 30.2 36.4 67.6 36.4 108.2s-13.6 78-36.4 108.2l26.6 19.6z M435.8 432h-115.8v160h115.8l138.2 112v-384z"></path>
    </SVG>
  )
}


IosVolumeDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosVolumeDown.propTypes = {
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


export default IosVolumeDown
