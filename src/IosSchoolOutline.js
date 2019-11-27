import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSchoolOutline = props => {
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
      <path d="M512.8 128l-448.4 256 127.6 73.2v255.8l320 183 320-183v-255.8l96-54.8v365.6h32v-384l-447.2-256zM496 850l-272-155.6v-219l272 155.4v219.2zM800 694.4l-272 155.6v-219.2l272-155.4v219zM512 602l-382.8-218 384-219.2 383 219.2-384.2 218z"></path>
    </SVG>
  )
}


IosSchoolOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSchoolOutline.propTypes = {
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


export default IosSchoolOutline
