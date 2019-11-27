import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCloudCircle = props => {
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
      <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM677.2 640h-330.4c-50.2 0-90.8-42.8-90.8-94.4 0-42 26.4-79.6 66.4-92.4 0.6-40 32.4-72.2 71.4-72.2 10.6 0 20.8 2.4 29.8 6.8 26.2-41 73.8-67.6 125-67.6 75.4 0 135 58.6 142.8 133.8 43.4 7 76.6 45.4 76.6 91.8 0 51.4-40.6 94.2-90.8 94.2z"></path>
    </SVG>
  )
}


IosCloudCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudCircle.propTypes = {
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


export default IosCloudCircle
