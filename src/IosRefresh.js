import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosRefresh = props => {
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
      <path d="M512 768.2c-141.4 0-256-114.6-256-256.2s114.6-256.2 256-256.2v-87.8l192 128-192 111.4v-111.6c-119.2 0-216.2 97-216.2 216.2s97 216.2 216.2 216.2 216.2-96.2 216.2-216.2h39.8c0 142-114.6 256.2-256 256.2z"></path>
    </SVG>
  )
}


IosRefresh.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRefresh.propTypes = {
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


export default IosRefresh
