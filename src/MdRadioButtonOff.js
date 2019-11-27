import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRadioButtonOff = props => {
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
      <path d="M512 96c-228.798 0-416 187.202-416 416s187.202 416 416 416 416-187.202 416-416-187.202-416-416-416zM512 844.798c-183.036 0-332.798-149.764-332.798-332.798s149.762-332.8 332.798-332.8 332.8 149.764 332.8 332.8-149.764 332.798-332.8 332.798z"></path>
    </SVG>
  )
}


MdRadioButtonOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRadioButtonOff.propTypes = {
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


export default MdRadioButtonOff
