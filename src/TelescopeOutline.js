import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const TelescopeOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M39.93 327.56l-4.71-8.13A24 24 0 0144 286.64l86.87-50.07a16 16 0 0121.89 5.86l12.71 22a16 16 0 01-5.86 21.85l-86.85 50.07a24.06 24.06 0 01-32.83-8.79z" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M170.68 273.72L147.12 233a24 24 0 018.8-32.78l124.46-71.75a16 16 0 0121.89 5.86l31.57 54.59a16 16 0 01-5.84 21.84L203.51 282.5a24 24 0 01-32.83-8.78zM341.85 202.21l-46.51-80.43a24 24 0 018.8-32.78l93.29-53.78A24.07 24.07 0 01430.27 44l46.51 80.43a24 24 0 01-8.8 32.79L374.69 211a24.06 24.06 0 01-32.84-8.79zM127.59 480l96.14-207.99M271.8 256.02L368.55 448" /></svg>
    </SvgContainer>
  )
}


TelescopeOutline.defaultProps = {
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


TelescopeOutline.propTypes = {
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


export default TelescopeOutline