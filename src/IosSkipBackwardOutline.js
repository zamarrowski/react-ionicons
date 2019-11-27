import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSkipBackwardOutline = props => {
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
      <path d="M192 192v640h158v-283.6l482 283.6v-640l-482 283.6v-283.6h-158zM351.2 512l15.2-8.8 433.6-255.2v528l-448.8-264zM224 224h94v576h-94v-576z"></path>
    </SVG>
  )
}


IosSkipBackwardOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSkipBackwardOutline.propTypes = {
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


export default IosSkipBackwardOutline
