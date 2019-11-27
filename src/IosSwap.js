import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSwap = props => {
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
      <path d="M779 186l-22.6 23.2 141.6 142.8h-514v32h514l-141.6 141.8 22.6 22.4 181-181.2z M245 473.8l22.6 23.2-141.6 143h514v32h-514l141.6 141.8-22.6 22.2-181-181z"></path>
    </SVG>
  )
}


IosSwap.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSwap.propTypes = {
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


export default IosSwap
