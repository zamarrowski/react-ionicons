import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMapOutline = props => {
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
      <path d="M704.8 256l-191.4-128-192.6 128-192.8-128v640l192.8 128 192.6-128 191.4 128 191.2-128v-640l-191.2 128zM336 284.8l160-106.4v563l-160 106.2v-562.8zM528 176l160 106.8v563.2l-160-107v-563zM160 188l144 95.2v563.2l-144-95.6v-562.8zM864 750.8l-144 96.6v-562.6l144-96.8v562.8z"></path>
    </SVG>
  )
}


IosMapOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMapOutline.propTypes = {
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


export default IosMapOutline
