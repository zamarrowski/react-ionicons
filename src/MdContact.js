import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdContact = props => {
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
      <path d="M512 96c-228.8 0-416 187.2-416 416s187.2 416 416 416 416-187.2 416-416-187.2-416-416-416zM512 220.8c68.6 0 124.8 56.2 124.8 124.8s-56.2 124.8-124.8 124.8-124.8-56.2-124.8-124.8 56.2-124.8 124.8-124.8zM512 811.6c-104 0-195.6-54-249.6-133.2 2-83.2 166.4-129 249.6-129s247.6 45.8 249.6 129c-54 79-145.6 133.2-249.6 133.2z"></path>
    </SVG>
  )
}


MdContact.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdContact.propTypes = {
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


export default MdContact
