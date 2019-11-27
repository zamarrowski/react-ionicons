import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdTime = props => {
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
      <path d="M511.6 96c-229.6 0-415.6 186.4-415.6 416s186 416 415.6 416c230 0 416.4-186.4 416.4-416s-186.4-416-416.4-416zM512 844.8c-183.8 0-332.8-149-332.8-332.8s149-332.8 332.8-332.8 332.8 149 332.8 332.8-149 332.8-332.8 332.8z M532.8 304h-62.4v249.6l218.4 131 31.2-51.2-187.2-111v-218.4z"></path>
    </SVG>
  )
}


MdTime.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdTime.propTypes = {
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


export default MdTime
