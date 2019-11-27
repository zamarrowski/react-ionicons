import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMail = props => {
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
      <path d="M896 768v-484.4l-262.2 199.6 136.2 154.8-4 4-157.8-139.2-96.2 73.2-96.2-73.2-157.8 139.2-4-4 136-154.8-262-199.2v484z M879.4 256h-735.4l368 279.8z"></path>
    </SVG>
  )
}


IosMail.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMail.propTypes = {
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


export default IosMail
