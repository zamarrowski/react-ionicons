import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosOptions = props => {
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
      <path d="M64 752h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h182.7v64h-182.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-566.7z M64 480h182.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h566.7v64h-566.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-182.7z M64 208h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h182.7v64h-182.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-566.7z"></path>
    </SVG>
  )
}


IosOptions.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosOptions.propTypes = {
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


export default IosOptions
