import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosArrowDroprightCircle = props => {
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
      <path d="M96 512c0 229.8 186.2 416 416 416s416-186.2 416-416-186.2-416-416-416c-229.8 0-416 186.2-416 416zM616.8 512l-200.8-186.4 27.6-25.6 228.4 212-228.4 212-27.6-25.6 200.8-186.4z"></path>
    </SVG>
  )
}


IosArrowDroprightCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArrowDroprightCircle.propTypes = {
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


export default IosArrowDroprightCircle
