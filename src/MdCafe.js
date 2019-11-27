import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCafe = props => {
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
      <path d="M96 800h736v96h-736v-96z M848 128h-688v448c0 88 72 160 160 160h288c88 0 160-72 160-160v-128h80c44 0 80-36 80-80v-160c0-44-36-80-80-80zM848 352h-80v-128h80v128z"></path>
    </SVG>
  )
}


MdCafe.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCafe.propTypes = {
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


export default MdCafe
