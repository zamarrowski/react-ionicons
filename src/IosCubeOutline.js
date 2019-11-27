import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCubeOutline = props => {
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
      <path d="M512 64l-448 192v448l448 256 448-256v-448l-448-192zM908 268.4l-396 223.6-393.6-224.4 393.6-171.6 396 172.4zM96 291.6l400 228.4v394l-400-228.6v-393.8zM528 914v-394l400-226.2v391.6l-400 228.6z"></path>
    </SVG>
  )
}


IosCubeOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCubeOutline.propTypes = {
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


export default IosCubeOutline
