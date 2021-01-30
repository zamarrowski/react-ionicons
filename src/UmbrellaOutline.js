import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const UmbrellaOutline = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Umbrella</title><path d="M256 272v160a32 32 0 01-32 32h0a32 32 0 01-32-32M464 272c0-114.88-93.12-208-208-208S48 157.12 48 272h0a67.88 67.88 0 0196 0h0a78.28 78.28 0 01102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 01368 272h0a67.88 67.88 0 0196 0zM256 64V48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}


UmbrellaOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


UmbrellaOutline.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default UmbrellaOutline