import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMove = props => {
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
      <path d="M779.2 331l-22.6 22.6 141.6 142.4h-370.2v-370.2l142.4 141.8 22.6-22.8-181-181-181 181 22.6 22.6 142.4-141.6v370.2h-370.2l141.6-142.4-22.6-22.6-180.8 181 181 181 22.6-22.6-141.8-142.4h370.2v370l-142.4-141.6-22.6 22.6 181 181 181-181-22.6-22.6-142.4 141.6v-370h370.2l-141.8 142.4 22.6 22.6 181-181z"></path>
    </SVG>
  )
}


IosMove.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMove.propTypes = {
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


export default IosMove
