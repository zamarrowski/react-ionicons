import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const SpeedometerOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z"/><path d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"/></svg>
    </SvgContainer>
  )
}


SpeedometerOutline.defaultProps = {
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


SpeedometerOutline.propTypes = {
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


export default SpeedometerOutline