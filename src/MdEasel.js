import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdEasel = props => {
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
      <path d="M256 352h512v256h-512v-256z M896 192h-768c-17.6 0-32 14.4-32 32v512c0 17.6 13.8 32 31.6 32h768.4c17.6 0 32-14.4 32-32v-512c0-17.6-14.4-32-32-32zM832 672h-640v-384h640v384z M160 928h114l45-128h-112.8z M558.8 96h-93.6l-23 64h139.6z M750 928h114l-46-128h-113z M464 800h96v64h-96v-64z"></path>
    </SVG>
  )
}


MdEasel.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdEasel.propTypes = {
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


export default MdEasel
