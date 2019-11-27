import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosHappy = props => {
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
      <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-229.8-186.2-416-416-416zM656 400c26.6 0 48 21.4 48 48s-21.4 48-48 48-48-21.4-48-48 21.4-48 48-48zM368 400c26.6 0 48 21.4 48 48s-21.4 48-48 48-48-21.4-48-48 21.4-48 48-48zM512 738c-96.6 0-177-70-193-162h386.2c-16.2 92-96.6 162-193.2 162z"></path>
    </SVG>
  )
}


IosHappy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHappy.propTypes = {
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


export default IosHappy
