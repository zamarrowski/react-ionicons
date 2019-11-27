import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCreate = props => {
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
      <path d="M128 736v160h160l471.454-471.458-159.998-159.996-471.456 471.454zM883.204 300.796c17.062-17.062 17.062-42.668 0-59.73l-100.27-100.27c-17.062-17.062-42.668-17.062-59.73 0l-78.936 78.938 159.998 159.996 78.938-78.934z"></path>
    </SVG>
  )
}


MdCreate.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCreate.propTypes = {
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


export default MdCreate
