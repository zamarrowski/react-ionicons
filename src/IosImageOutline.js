import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosImageOutline = props => {
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
      <path d="M128 128v768h768v-768h-768zM864 864h-706v-704h706v704z M640 352c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z M192 192v512h640v-512h-640zM589.2 672h-282.4l141.2-200.4 141.2 200.4zM576.8 598.8l44.6-63.2 96 136.4h-89.2l-51.4-73.2zM800 672h-43.4l-135.2-192-64.2 91-109.2-155-180.2 256h-43.8v-448h576v448z"></path>
    </SVG>
  )
}


IosImageOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosImageOutline.propTypes = {
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


export default IosImageOutline
