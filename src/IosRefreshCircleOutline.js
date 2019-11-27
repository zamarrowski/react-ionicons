import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosRefreshCircleOutline = props => {
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
      <path d="M728.2 512c0 120-97 216.4-216.2 216.4s-216.2-97-216.2-216.4c0-119.2 97-216.2 216.2-216.2v111.6l192-111.4-192-128v88c-141.4 0-256 114.8-256 256.2 0 141.6 114.6 256.2 256 256.2s256-114.2 256-256.2h-39.8z M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM512 893.4c-210.2 0-381.4-171-381.4-381.4 0-210.2 171-381.4 381.4-381.4 210.2 0 381.4 171 381.4 381.4 0 210.2-171.2 381.4-381.4 381.4z"></path>
    </SVG>
  )
}


IosRefreshCircleOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRefreshCircleOutline.propTypes = {
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


export default IosRefreshCircleOutline
