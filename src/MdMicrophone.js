import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMicrophone = props => {
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
      <path d="M768 224v-55.2c0-58-49-104.8-109.6-104.8h-292.6c-60.8-0-109.8 46.8-109.8 104.8v55.2h304v74h-304v86h304v74h-304v86h304v74h-304v83.6c0 58 49 104.4 109.8 104.4h60.2v154h172v-154h60.4c60.6 0 109.6-46.4 109.6-104.4v-83.6h-112v-74h112v-86h-112v-74h112v-86h-112v-74h112z"></path>
    </SVG>
  )
}


MdMicrophone.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMicrophone.propTypes = {
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


export default MdMicrophone
