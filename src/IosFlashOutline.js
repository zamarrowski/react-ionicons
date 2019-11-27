import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFlashOutline = props => {
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
      <path d="M547.8 264l-33 178.2-6.8 37.8h168l-199.6 280 33-178.2 6.6-37.8h-167.8l199.6-280zM605.4 128l-319.4 448h191.6l-59 320 319.4-448h-191.6l59-320z"></path>
    </SVG>
  )
}


IosFlashOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFlashOutline.propTypes = {
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


export default IosFlashOutline
