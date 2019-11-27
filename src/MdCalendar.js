import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCalendar = props => {
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
      <path d="M736.010 544h-192v192h192v-192zM672.010 128v64h-320v-64h-96v64h-48.020c-44.004 0-80 35.996-80 80v544c0 44.004 35.996 80 80 80h608.020c44.004 0 80-35.996 80-80v-544c0-44.004-35.996-80-80-80h-48v-64h-96zM816.010 816h-608.020v-424h608.020v424z"></path>
    </SVG>
  )
}


MdCalendar.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCalendar.propTypes = {
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


export default MdCalendar
