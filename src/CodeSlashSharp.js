import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CodeSlashSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M161.98 397.63L0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63zM222.15 442L182 430.08 289.85 70 330 81.92 222.15 442z" /></svg>
    </SvgContainer>
  )
}


CodeSlashSharp.defaultProps = {
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


CodeSlashSharp.propTypes = {
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


export default CodeSlashSharp