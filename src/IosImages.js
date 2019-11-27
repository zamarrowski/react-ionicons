import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosImages = props => {
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
      <path d="M780.8 243.8l-12.8-179.8-704 48 46.6 639.8 44.4-3.2-11 157.8 768 53.6 48-704-179.2-12.2zM138.4 717.8l-40.2-574.6 640.4-44.8 10 143.2-32.2-2.2-7.4-107-574.8 40.4 30.6 436.4-7.6 107.2-18.8 1.4zM881.2 925.8l-705-49.2 44.6-638.6 705 49.2-44.6 638.6z M252.6 272.4l-31.2 447 639 44.6 31.2-447-639-44.6zM338.2 695.4l155-190.2 126.8 209.8-281.8-19.6zM659.2 717.8l-46.4-76.6 49-60 86.4 142.8-89-6.2zM754.8 435.8c-1.2 17.6-16.6 31-34.2 29.6s-31-16.6-29.8-34.2c1.2-17.6 16.6-31 34.2-29.6 17.8 1.2 31.2 16.6 29.8 34.2z"></path>
    </SVG>
  )
}


IosImages.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosImages.propTypes = {
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


export default IosImages
