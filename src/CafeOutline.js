import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CafeOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M368 80h64a16 16 0 0116 16v34a46 46 0 01-46 46h-34M96 80h272v192a80 80 0 01-80 80H176a80 80 0 01-80-80V80h0zM64 416h336" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
    </SvgContainer>
  )
}


CafeOutline.defaultProps = {
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


CafeOutline.propTypes = {
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


export default CafeOutline