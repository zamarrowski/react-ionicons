import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosGrid = props => {
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
      <path d="M384 384h256v256h-256v-256z M128 128v768h768v-768h-768zM832 384h-160v256h160v32h-160v160h-32v-160h-256v160h-32v-160h-160v-32h160v-256h-160v-32h160v-160h32v160h256v-160h32v160h160v32z"></path>
    </SVG>
  )
}


IosGrid.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGrid.propTypes = {
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


export default IosGrid
