import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdColorFilter = props => {
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
      <path d="M883.6 240.2l-99.8-99.8c-16.6-16.6-43.6-16.6-60.2 0l-133.2 133.2-82.2-81.6-60.2 60.2 60.6 60.6-380.6 380.6v202.6h202.6l380.6-380.6 60.6 60.6 60.2-60.2-82-82 133.2-133.2c17-16.8 17-43.6 0.4-60.4zM295.2 810.8l-82-82 343.8-343.8 82 82-343.8 343.8z"></path>
    </SVG>
  )
}


MdColorFilter.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdColorFilter.propTypes = {
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


export default MdColorFilter
