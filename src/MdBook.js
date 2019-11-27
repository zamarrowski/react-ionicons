import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBook = props => {
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
      <path d="M852.4 160.8l-340.4 64-340.4-64c-43.6-6.8-75.6 33.8-75.6 75.2v489c0 41.4 32 65.2 75.6 75.2l340.4 63.8 340.4-64c43.6-10 75.6-33.8 75.6-75.2v-488.8c0-41.4-32-82-75.6-75.2zM852.4 724.8l-302.4 64v-489l302.4-64v489zM474 788.8l-302.4-64v-488.8l302.4 64v488.8z"></path>
    </SVG>
  )
}


MdBook.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBook.propTypes = {
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


export default MdBook
