import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMoon = props => {
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
      <path d="M390 250c0-52.6 10.6-102.6 29.8-148.2-182.4 44.2-317.8 208.4-317.8 404.2 0 229.6 186.4 416 416 416 195.8 0 360-135.4 404.2-317.8-45.6 19.2-95.8 29.8-148.2 29.8-212 0-384-172-384-384z"></path>
    </SVG>
  )
}


MdMoon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMoon.propTypes = {
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


export default MdMoon
