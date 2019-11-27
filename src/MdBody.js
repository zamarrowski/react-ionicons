import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBody = props => {
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
      <path d="M512 96c44 0 80 36 80 80s-36 80-80 80-80-36-80-80 36-80 80-80zM896 384.2h-256v543.8h-85.4v-288h-85.4v288h-85.2v-543.8h-256v-85.4h768v85.4z"></path>
    </SVG>
  )
}


MdBody.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBody.propTypes = {
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


export default MdBody
