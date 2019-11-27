import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdTrendingDown = props => {
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
      <path d="M960 794v-269l-102.6 102.6-282.2-282-179.2 179.4-268.8-269-63.2 63.2 332 332.6 179.2-179.4 218.6 218.8-102.6 102.8h268.8z"></path>
    </SVG>
  )
}


MdTrendingDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdTrendingDown.propTypes = {
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


export default MdTrendingDown
