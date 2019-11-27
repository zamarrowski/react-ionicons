import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCash = props => {
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
      <path d="M80 736h864v32h-864v-32z M96 800h832v32h-832v-32z M512 336c-61.8 0-112 50.2-112 112s50.2 112 112 112 112-50.2 112-112-50.2-112-112-112z M64 192v512h896v-512h-896zM256 640h-128v-32h128v32zM256 288h-128v-32h128v32zM512 592c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144zM896 640h-128v-32h128v32zM896 288h-128v-32h128v32z"></path>
    </SVG>
  )
}


IosCash.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCash.propTypes = {
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


export default IosCash
