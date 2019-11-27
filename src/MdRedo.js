import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRedo = props => {
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
      <path d="M64 674.4l103.6 29.6c45.8-139.4 177.4-235.6 332-235.6 85.6 0 163 31.4 223.6 82.2l-158.2 153.4h395v-384l-159.2 152.6c-80.8-70.4-185.6-113.6-301.4-113.6-203 0.2-374.6 132.4-435.4 315.4z"></path>
    </SVG>
  )
}


MdRedo.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRedo.propTypes = {
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


export default MdRedo
