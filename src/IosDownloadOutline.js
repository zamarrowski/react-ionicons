import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosDownloadOutline = props => {
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
      <path d="M576 288v32h224v544h-576v-544h224v-32h-256v608h640v-608z M386.2 504.6l-23.2 23.2 149 149 149-149-23.2-23.2-109.4 109.4v-486h-32.8v486z"></path>
    </SVG>
  )
}


IosDownloadOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosDownloadOutline.propTypes = {
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


export default IosDownloadOutline
