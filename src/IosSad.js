import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSad = props => {
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
      <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-229.8-186.2-416-416-416zM368 400c26.6 0 48 21.4 48 48s-21.4 48-48 48-48-21.4-48-48 21.4-48 48-48zM320 704c16-92 95.4-162 192-162s176 70 192 162h-384zM656 496c-26.6 0-48-21.4-48-48s21.4-48 48-48 48 21.4 48 48-21.4 48-48 48z"></path>
    </SVG>
  )
}


IosSad.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSad.propTypes = {
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


export default IosSad
