import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosRedo = props => {
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
      <path d="M128 800h20.6l38.4-62.4c41-65.4 89.8-125.6 151.6-153.2 48.8-21.8 93.4-37.8 173.4-40v159.6l384-256-384-256v160.6c-126 5.6-216.2 41.4-286.6 112.4-104.6 105.4-97.4 238-97.4 271.4 0.2 17.8 0 43.4 0 63.6z"></path>
    </SVG>
  )
}


IosRedo.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRedo.propTypes = {
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


export default IosRedo
