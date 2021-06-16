import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ColorWandSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M133.441 200.647l67.197-67.196 78.142 78.142-67.196 67.196zM301.41 234.21l-67.19 67.2L412 480l68-68-178.59-177.79zM32 176h80v32H32zM67.624 90.25l22.627-22.628 56.569 56.569-22.627 22.627zM176 32h32v80h-32zM237.32 124.195l56.569-56.569 22.627 22.627-56.569 56.569zM67.62 293.887l56.569-56.569 22.627 22.627-56.569 56.569z" /></svg>
    </SvgContainer>
  )
}


ColorWandSharp.defaultProps = {
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


ColorWandSharp.propTypes = {
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


export default ColorWandSharp