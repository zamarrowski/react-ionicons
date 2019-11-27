import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCalculator = props => {
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
      <path d="M736 96h-448c-53.2 0-96 43.2-96 96v640c0 52.8 42.8 96 96 96h448c52.8 0 96-43.2 96-96v-640c0-52.8-42.8-96-96-96zM400 832h-96v-96h96v96zM400 656h-96v-96h96v96zM400 480h-96v-96h96v96zM560 832h-96v-96h96v96zM560 656h-96v-96h96v96zM560 480h-96v-96h96v96zM720 832h-96v-272h96v272zM720 480h-96v-96h96v96zM720 288h-416v-96h416v96z"></path>
    </SVG>
  )
}


MdCalculator.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCalculator.propTypes = {
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


export default MdCalculator
