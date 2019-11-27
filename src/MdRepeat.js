import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRepeat = props => {
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
      <path d="M298.6 304h426.6v124.8l170.6-166.4-170.4-166.4v124.8h-512v249.6h85.4v-166.4zM725.4 720h-426.8v-124.8l-170.6 166.4 170.6 166.4v-124.8h512v-249.6h-85.4v166.4z"></path>
    </SVG>
  )
}


MdRepeat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRepeat.propTypes = {
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


export default MdRepeat
