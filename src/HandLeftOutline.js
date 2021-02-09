import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const HandLeftOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M80 320V144a32 32 0 0132-32h0a32 32 0 0132 32v112M144 256V80a32 32 0 0132-32h0a32 32 0 0132 32v160M272 241V96a32 32 0 0132-32h0a32 32 0 0132 32v224M208 240V48a32 32 0 0132-32h0a32 32 0 0132 32v192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M80 320c0 117.4 64 176 152 176s123.71-39.6 144-88l52.71-144c6.66-18.05 3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31 11.68L336 320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}


HandLeftOutline.defaultProps = {
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


HandLeftOutline.propTypes = {
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


export default HandLeftOutline