import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPricetagOutline = props => {
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
      <path d="M768 320c35.2 0 64-28.8 64-64s-28.8-64-64-64-64 28.8-64 64 28.8 64 64 64zM768 224c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32z M896 128v261.4l-493.4 493.4-261.4-261.4 493.4-493.4h261.4zM928 96h-306.6l-525.4 525.4 306.6 306.6 525.4-525.4v-306.6z"></path>
    </SVG>
  )
}


IosPricetagOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPricetagOutline.propTypes = {
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


export default IosPricetagOutline
