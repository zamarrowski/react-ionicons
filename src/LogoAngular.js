import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoAngular = props => {
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
      <path d="M427.146 512h169.692l-84.854-178.712z M511.962 64l-447.962 160 92.24 544 355.76 192 355.5-192 92.5-544-448.038-160zM688 704l-53.178-112h-245.654l-53.168 112h-80l256-560 256 560h-80z"></path>
    </SVG>
  )
}


LogoAngular.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoAngular.propTypes = {
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


export default LogoAngular
