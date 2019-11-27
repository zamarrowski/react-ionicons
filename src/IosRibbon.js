import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosRibbon = props => {
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
      <path d="M512 576c141.4 0 256-114.6 256-256s-114.6-256-256-256-256 114.6-256 256 114.6 256 256 256zM512 144c97 0 176 79 176 176s-79 176-176 176-176-79-176-176 79-176 176-176z M512 464c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144z M512 608c-87 0-165-38.6-217.8-99.6l-166.2 291.6h192l96 160 96-211.6 67.2-148.4c-21.6 5.2-44 8-67.2 8z M729.8 508.4c-30.2 34.8-68.6 62.4-112 79.6l-89.6 196.2 79.8 175.8 96-160h192l-166.2-291.6z"></path>
    </SVG>
  )
}


IosRibbon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRibbon.propTypes = {
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


export default IosRibbon
