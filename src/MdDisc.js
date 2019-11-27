import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdDisc = props => {
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
      <path d="M512 96c-229.6 0-416 186.4-416 416s186.4 416 416 416 416-186.4 416-416-186.4-416-416-416zM512 699.2c-103.6 0-187.2-83.6-187.2-187.2s83.6-187.2 187.2-187.2 187.2 83.6 187.2 187.2-83.6 187.2-187.2 187.2zM512 470.4c-22.8 0-41.6 18.8-41.6 41.6s18.8 41.6 41.6 41.6 41.6-18.8 41.6-41.6-18.8-41.6-41.6-41.6z"></path>
    </SVG>
  )
}


MdDisc.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdDisc.propTypes = {
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


export default MdDisc
