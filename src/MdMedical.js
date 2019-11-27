import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMedical = props => {
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
      <path d="M703.8 512l216.2-124.8-96-166.4-216 124.8v-249.6h-192v249.6l-216-124.8-96 166.4 216.2 124.8-216.2 124.8 96 166.4 216-124.8v249.6h192v-249.6l216 124.8 96-166.4z"></path>
    </SVG>
  )
}


MdMedical.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMedical.propTypes = {
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


export default MdMedical
