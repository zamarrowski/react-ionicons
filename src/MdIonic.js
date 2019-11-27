import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdIonic = props => {
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
      <path d="M512 328.6c-101.2 0-183.4 82.2-183.4 183.4s82.2 183.4 183.4 183.4 183.4-82.2 183.4-183.4c0-101.2-82.2-183.4-183.4-183.4z M875.6 249.2c0 48.38-39.22 87.6-87.6 87.6s-87.6-39.22-87.6-87.6c0-48.38 39.22-87.6 87.6-87.6s87.6 39.22 87.6 87.6z M890.6 339.6c-14.8 16.8-33.8 30-55.2 38 17.2 41.4 26.8 86.8 26.8 134.4 0 193.2-157.2 350.4-350.4 350.4s-350.4-157.2-350.4-350.4c0-193.2 157.2-350.4 350.4-350.4 53.8 0 104.6 12.2 150.2 33.8 9-21 23-39.2 40.6-53.2-57-29.4-121.8-46.2-190.6-46.2-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-61.4-13.4-119.8-37.4-172.4z"></path>
    </SVG>
  )
}


MdIonic.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdIonic.propTypes = {
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


export default MdIonic
