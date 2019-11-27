import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCard = props => {
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
      <path d="M870.4 160h-716.8c-49.8 0-89.2 39.2-89.2 88l-0.4 528c0 48.8 39.8 88 89.6 88h716.8c49.8 0 89.6-39.2 89.6-88v-528c0-48.8-39.8-88-89.6-88zM870.4 776h-716.8v-264h716.8v264zM870.4 336h-716.8v-88h716.8v88z"></path>
    </SVG>
  )
}


MdCard.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCard.propTypes = {
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


export default MdCard
