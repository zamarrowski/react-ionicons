import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPower = props => {
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
      <path d="M781.4 199.4c-5.6-4.8-12.8-7.4-20.4-7.4-9.2 0-18 4-23.8 11-5.4 6.4-8 14.4-7.4 22.8s4.6 16 11 21.4c79 67 124.4 164.2 124.4 266.6 0 193.8-158.4 351.6-353.2 351.6s-353.2-157.8-353.2-351.6c0-102.6 45.4-199.8 124.4-266.6 6.4-5.4 10.4-13 11-21.4s-2-16.4-7.4-22.8c-6-7-14.6-11-23.8-11-7.4 0-14.6 2.6-20.4 7.4-93.2 78.8-146.6 193.4-146.6 314.4 0 228.4 186.6 414.2 416 414.2s416-185.8 416-414.2c0-121-53.4-235.6-146.6-314.4z M514 544c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32s-32 14.4-32 32v384c0 17.6 14.4 32 32 32z"></path>
    </SVG>
  )
}


IosPower.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPower.propTypes = {
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


export default IosPower
