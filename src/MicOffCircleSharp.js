import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const MicOffCircleSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm64 200.22V208h32v40.22a77.53 77.53 0 01-13.37 43.11L316 266.4a44.11 44.11 0 004-18.18zM256 128a48.14 48.14 0 0148 48v64a48.07 48.07 0 01-1.44 11.64l-89-97.92A48.13 48.13 0 01256 128zm48 256h-96v-32h32v-17.74a103.71 103.71 0 01-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208h32v40.22c0 25.66 28 55.48 64 55.48a56.91 56.91 0 007-.45l24.52 27a99.57 99.57 0 01-15.5 4V352h32zm-95.91-141.13l40.5 44.55a48.2 48.2 0 01-40.5-44.55zm136.07 124.89l-200.5-218.5 23.68-21.52 200.5 218.5z" /></svg>
    </SvgContainer>
  )
}


MicOffCircleSharp.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MicOffCircleSharp.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,
  title: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default MicOffCircleSharp