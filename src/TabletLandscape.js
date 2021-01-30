import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const TabletLandscape = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Tablet Landscape</title><path d="M512 128v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64zM32 384a32 32 0 0032 32h384a32 32 0 0032-32V128a32 32 0 00-32-32H64a32 32 0 00-32 32z"/><path d="M0 128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128m480 256V128a32 32 0 00-32-32H64a32 32 0 00-32 32v256a32 32 0 0032 32h384a32 32 0 0032-32m-16 0a16 16 0 01-16 16H64a16 16 0 01-16-16V128a16 16 0 0116-16h384a16 16 0 0116 16v256z"/></svg>
    </SvgContainer>
  )
}


TabletLandscape.defaultProps = {
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


TabletLandscape.propTypes = {
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


export default TabletLandscape