import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosOutlet = props => {
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
      <path d="M742.8 128h-461.6c-130.2 78-217.2 221-217.2 384s87 304 217.2 384h461.8c130-80 217-221 217-384s-87-306-217.2-384zM384 544h-64v-256h64v256zM576 800h-128v-96c0-35.2 28.8-64 64-64s64 28.8 64 64v96zM704 512h-64v-192h64v192z"></path>
    </SVG>
  )
}


IosOutlet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosOutlet.propTypes = {
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


export default IosOutlet
