import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRadioButtonOn = props => {
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
      <path d="M512 304c-114.4 0-208 93.6-208 208s93.6 208 208 208 208-93.6 208-208-93.6-208-208-208zM512 96c-228.798 0-416 187.202-416 416s187.202 416 416 416 416-187.202 416-416-187.202-416-416-416zM512 844.8c-183.036 0-332.8-149.766-332.8-332.8s149.764-332.8 332.8-332.8 332.8 149.764 332.8 332.8-149.764 332.8-332.8 332.8z"></path>
    </SVG>
  )
}


MdRadioButtonOn.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRadioButtonOn.propTypes = {
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


export default MdRadioButtonOn
