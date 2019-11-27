import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCheckbox = props => {
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
      <path d="M128 128v768h768v-768h-768zM432 714c-1 0-0.8-0.2 0-0.4 0.8 0.2 0.8 0.4 0 0.4zM430.6 677.2l-130-130 35.6-35.6 94.4 94.4 249.6-251.4 35 36.2-284.6 286.4z M432 714c0.8 0 0.8-0.2 0-0.4-0.8 0.2-1 0.4 0 0.4z"></path>
    </SVG>
  )
}


IosCheckbox.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCheckbox.propTypes = {
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


export default IosCheckbox
