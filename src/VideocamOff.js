import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const VideocamOff = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M336 179.52A67.52 67.52 0 00268.48 112h-79.2a4 4 0 00-2.82 6.83l142.71 142.71a4 4 0 006.83-2.82zM16 180v152a68 68 0 0068 68h184a67.66 67.66 0 0042.84-15.24 4 4 0 00.33-6L54.41 122a4 4 0 00-4.87-.62A68 68 0 0016 180zM464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M416 416L80 80"/></svg>
    </SvgContainer>
  )
}


VideocamOff.defaultProps = {
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


VideocamOff.propTypes = {
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


export default VideocamOff