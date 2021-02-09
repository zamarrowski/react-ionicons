import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Clipboard = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z"/></svg>
    </SvgContainer>
  )
}


Clipboard.defaultProps = {
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


Clipboard.propTypes = {
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


export default Clipboard