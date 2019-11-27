import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBluetooth = props => {
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
      <path d="M798 319.8l-257-255.8h-45v340l-206.6-205.6-63.4 63.2 251.6 250.4-251.6 250.4 63.4 63.2 206.6-205.6v340h45l257-255.8-193.6-192.2c0 0 193.6-192.2 193.6-192.2zM586 235.6l84.6 84.2-84.6 84.2v-168.4zM670.6 704.2l-84.6 84.2v-168.4c0 0 84.6 84.2 84.6 84.2z"></path>
    </SVG>
  )
}


MdBluetooth.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBluetooth.propTypes = {
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


export default MdBluetooth
