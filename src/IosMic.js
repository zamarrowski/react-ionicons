import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMic = props => {
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
      <path d="M512 96c-87.4 0-158 74.8-158 167v273.8c0 92.2 70.6 167.2 158 167.2s158-75 158-167.2v-273.8c0-92.2-70.6-167-158-167v0z M736 416v127.6c0 56.8-20.4 111-58.6 152.6-38 41.4-93.4 66.4-149 70.4l-16.4 1.2-16.8-1.2c-57-4.2-106.4-29.2-145.8-70.8s-61.4-95.6-61.4-152.2v-127.6h-32v127.6c0 134.4 108 245.2 242 255v97.4h-148v32h322v-32h-144v-97.4c132-9.8 240-120.6 240-255v-127.6h-32z"></path>
    </SVG>
  )
}


IosMic.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMic.propTypes = {
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


export default IosMic
