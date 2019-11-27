import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCopyOutline = props => {
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
      <path d="M608 192h-32v160h160v-32h-128z M650.6 128h-330.6v96h-96v672h480v-96h96v-522l-149.4-150zM672 864h-416v-608h64v544h352v64zM768 768h-416v-608h285.4l130.6 131.2v476.8z"></path>
    </SVG>
  )
}


IosCopyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCopyOutline.propTypes = {
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


export default IosCopyOutline
