import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdKey = props => {
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
      <path d="M498.4 448c-28.4-80.4-110.2-144-200.4-144-114.4 0-202 93.6-202 208s91.6 208 206 208c90.2 0 168.2-63.6 196.4-144h205.6v128h138.2v-128h85.8v-128h-429.6zM303.2 581c-38 0-69-31-69-69s31-69 69-69 69 31 69 69-31 69-69 69z"></path>
    </SVG>
  )
}


MdKey.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdKey.propTypes = {
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


export default MdKey
