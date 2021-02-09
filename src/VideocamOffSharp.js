import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const VideocamOffSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M57.376 79.998l22.627-22.627 358.63 358.63-22.627 22.628zM32 112a16 16 0 00-16 16v256a16 16 0 0016 16h288a15.89 15.89 0 009.34-3l-285-285zM336 208v-80a16 16 0 00-16-16H179.63l245.44 245.44L496 400V112z"/></svg>
    </SvgContainer>
  )
}


VideocamOffSharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


VideocamOffSharp.propTypes = {
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


export default VideocamOffSharp