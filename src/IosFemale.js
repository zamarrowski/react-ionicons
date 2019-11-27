import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFemale = props => {
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
      <path d="M592 96c-185.6 0-336 150.4-336 336 0 87 33 166.4 87.4 226l-119.4 119.4-84.6-84.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l84.6 84.6-100.6 100.6c-6.2 6.2-6.2 16.4 0 22.6 3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6l100.6-100.6 84.6 84.6c3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6c6.2-6.2 6.2-16.4 0-22.6l-85-84.6 119.4-119.4c59.6 54.2 139 87.4 226 87.4 185.6 0 336-150.4 336-336s-150.4-336-336-336zM807 647c-57.4 57.4-133.8 89-215 89s-157.6-31.6-215-89-89-133.8-89-215 31.6-157.6 89-215 133.8-89 215-89 157.6 31.6 215 89 89 133.8 89 215-31.6 157.6-89 215z"></path>
    </SVG>
  )
}


IosFemale.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFemale.propTypes = {
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


export default IosFemale
