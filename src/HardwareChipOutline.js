import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const HardwareChipOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<rect x="80" y="80" width="352" height="352" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><rect x="144" y="144" width="224" height="224" rx="16" ry="16" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32" /></svg>
    </SvgContainer>
  )
}


HardwareChipOutline.defaultProps = {
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


HardwareChipOutline.propTypes = {
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


export default HardwareChipOutline