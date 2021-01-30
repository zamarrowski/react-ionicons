import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const PlaySkipForwardCircleOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Skip Forward Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M320 176a16 16 0 00-16 16v53l-111.68-67.44a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31L304 267v53a16 16 0 0032 0V192a16 16 0 00-16-16z"/></svg>
    </SvgContainer>
  )
}


PlaySkipForwardCircleOutline.defaultProps = {
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


PlaySkipForwardCircleOutline.propTypes = {
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


export default PlaySkipForwardCircleOutline