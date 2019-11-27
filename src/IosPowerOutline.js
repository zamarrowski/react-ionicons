import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPowerOutline = props => {
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
      <path d="M781.4 195.8c-6.8-5.8-16.8-5-22.6 1.8s-5 16.8 1.8 22.6c86 73.2 135.2 179.4 135.2 291.6 0.2 211.8-172 384.2-383.8 384.2s-384-172.4-384-384.2c0-112.2 49.2-218.4 135.2-291.6 6.8-5.8 7.6-15.8 1.8-22.6s-15.8-7.6-22.6-1.8c-93 79.2-146.4 194.4-146.4 316 0 229.4 186.6 416.2 416 416.2s416-186.8 416-416.2c0-121.6-53.4-236.8-146.6-316z M514 544c8.8 0 16-7.2 16-16v-416c0-8.8-7.2-16-16-16s-16 7.2-16 16v416c0 8.8 7.2 16 16 16z"></path>
    </SVG>
  )
}


IosPowerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPowerOutline.propTypes = {
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


export default IosPowerOutline
