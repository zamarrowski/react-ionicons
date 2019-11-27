import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPerson = props => {
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
      <path d="M512 512c105.61 0 192-86.402 192-192s-86.39-192-192-192-192 86.402-192 192 86.39 192 192 192zM512 608c-127.196 0-384 64.804-384 192v96h768v-96c0-127.196-256.804-192-384-192z"></path>
    </SVG>
  )
}


MdPerson.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPerson.propTypes = {
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


export default MdPerson
