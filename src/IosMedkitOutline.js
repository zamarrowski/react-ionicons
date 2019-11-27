import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMedkitOutline = props => {
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
      <path d="M544 416v128h128v64h-128v128h-64v-128h-128v-64h128v-128h64zM576 384h-128v128h-128v128h128v128h128v-128h128v-128h-128v-128z M672 256v-64c-1-36.4-27.2-64-64.4-64h-198.2c-37.2 0-57.4 27.4-57.4 64v64h-256v640h832v-640h-256zM384 196.2c0-20.4 5.8-36.2 27.4-36.2h194.2c20.8 0 34.4 15.4 34.4 36.2v59.8h-256v-59.8zM896 864h-768v-576h768v576z"></path>
    </SVG>
  )
}


IosMedkitOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMedkitOutline.propTypes = {
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


export default IosMedkitOutline
