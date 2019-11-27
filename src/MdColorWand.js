import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdColorWand = props => {
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
      <path d="M401.6 314.4l-72.8 74.8 494.6 506.8 72.6-74.8z M362 128h74v136h-74v-136z M362 524h74v136h-74v-136z M540 352h138v74h-138v-74z M611.2 231.6l-51.4-52.6-94.2 96.6 51.2 52.4z M337.6 275.6l-94.2-96.6-51.2 52.6 94.2 96.4z M192.2 555.8l51.2 52.4 94.2-96.4-51.2-52.6z M128 352h130v74h-130v-74z"></path>
    </SVG>
  )
}


MdColorWand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdColorWand.propTypes = {
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


export default MdColorWand
