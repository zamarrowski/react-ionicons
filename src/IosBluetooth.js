import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBluetooth = props => {
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
      <path d="M572 512l196-174-256.4-274h-31.6v360l-178.8-154-45.2 50 224 192-224 192 45.2 51.6 178.8-157.6v362h31.6l0.4-0.8 256-271.2-196-176zM675.6 689l-131.6 141v-255.6l131.6 114.6zM544 451.2v-257l131.6 142.4-131.6 114.6z"></path>
    </SVG>
  )
}


IosBluetooth.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBluetooth.propTypes = {
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


export default IosBluetooth
