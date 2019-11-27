import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPie = props => {
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
      <path d="M65.2 512h446.8v-446.8c-10-0.8-21.2-1.2-32-1.2-229.8 0-416 186.2-416 416 0 10.8 0.4 22 1.2 32z M219.6 804.4c76.2 94.8 193.2 155.6 324.4 155.6 229.8 0 416-186.2 416-416 0-131.2-60.8-248.2-155.6-324.4-63.4-51-142.4-83.8-228.4-90.4v446.8h-446.8c6.6 86 39.4 165 90.4 228.4z"></path>
    </SVG>
  )
}


MdPie.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPie.propTypes = {
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


export default MdPie
