import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoDropbox = props => {
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
      <path d="M354 154l-226 147.8 156.2 125.4 227.8-141z M128 552.6l226 147.8 158-132.2-227.8-141z M512 568.2l158 132.2 226-147.8-156.2-125.4z M896 301.8l-226-147.8-158 132.2 227.8 141z M512.4 596.6l-159.6 132-68.8-44.4v49.8l228 136 228-136v-49.8l-68.4 44.4z"></path>
    </SVG>
  )
}


LogoDropbox.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoDropbox.propTypes = {
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


export default LogoDropbox
