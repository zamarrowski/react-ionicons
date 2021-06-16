import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const PlayForwardCircleOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><path d="M394.77 246.7l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31L264 271.81v53.32a10.78 10.78 0 0016.32 9.31l114.45-69.14a10.89 10.89 0 000-18.6z" /></svg>
    </SvgContainer>
  )
}


PlayForwardCircleOutline.defaultProps = {
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


PlayForwardCircleOutline.propTypes = {
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


export default PlayForwardCircleOutline