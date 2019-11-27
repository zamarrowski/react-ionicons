import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosInformation = props => {
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
      <path d="M543 344c0 22.091-17.909 40-40 40s-40-17.909-40-40c0-22.091 17.909-40 40-40s40 17.909 40 40z M544 688v-256h-96v16h32v240h-32v16h128v-16z"></path>
    </SVG>
  )
}


IosInformation.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosInformation.propTypes = {
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


export default IosInformation
