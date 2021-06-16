import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const RefreshOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 58l80 80-80 80" /></svg>
    </SvgContainer>
  )
}


RefreshOutline.defaultProps = {
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


RefreshOutline.propTypes = {
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


export default RefreshOutline