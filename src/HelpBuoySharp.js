import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const HelpBuoySharp = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Help Buoy</title><path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm-64 224a64 64 0 1164 64 64 64 0 01-64-64zm237.24-62.29L342.91 199a104.86 104.86 0 00-29.86-29.86l5.24-86.33a185 185 0 01111 111zm-303.35-67.82a183.44 183.44 0 0167.82-43.13l5.29 86.33A104.86 104.86 0 00169.09 199l-86.33-5.24a183.44 183.44 0 0143.13-67.87zm-43.13 192.4l86.33-5.24A104.86 104.86 0 00199 342.91l-5.24 86.33a185 185 0 01-111-110.95zm303.35 67.82a183.44 183.44 0 01-67.82 43.13l-5.24-86.33a104.86 104.86 0 0029.86-29.86l86.33 5.24a183.44 183.44 0 01-43.13 67.82z"/></svg>
    </SvgContainer>
  )
}


HelpBuoySharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


HelpBuoySharp.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default HelpBuoySharp