import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Eyedrop = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M461.05 51a65 65 0 00-45.71-19h-.76a61.81 61.81 0 00-44.36 19.25 12.81 12.81 0 00-1.07 1.25l-54 69.76c-5.62 7.1-12.74 8.68-16.78 4.64l-1.9-1.9a48 48 0 00-67.92 67.92l9.91 9.91a2 2 0 010 2.83L58.7 385.38C54 390.05 46.9 399.85 38.85 431c-4.06 15.71-6.51 29.66-6.61 30.24A16 16 0 0048 480a15.68 15.68 0 002.64-.22c.58-.1 14.44-2.43 30.13-6.44 31.07-7.94 41.05-15.24 45.85-20l179.77-179.79a2 2 0 012.82 0l9.92 9.92a48 48 0 0067.92-67.93l-1.59-1.54c-5-5-2.52-12.11 4.32-17.14l69.75-53.94a17.82 17.82 0 001.47-1.32 63.2 63.2 0 0019-45A63.88 63.88 0 00461.05 51zM250.78 283.9c-2.92 2.92-16.18 7.92-23.39.71s-2.24-20.42.69-23.35l33-33a2 2 0 012.83 0l19.84 19.83a2 2 0 010 2.83z"/></svg>
    </SvgContainer>
  )
}


Eyedrop.defaultProps = {
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


Eyedrop.propTypes = {
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


export default Eyedrop