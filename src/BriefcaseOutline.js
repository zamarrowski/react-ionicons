import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BriefcaseOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<rect x="32" y="128" width="448" height="320" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
    </SvgContainer>
  )
}


BriefcaseOutline.defaultProps = {
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


BriefcaseOutline.propTypes = {
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


export default BriefcaseOutline