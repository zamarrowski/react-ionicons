import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const WifiSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M332.69 320a115 115 0 00-152.8 0M393.74 259a201.26 201.26 0 00-274.92 0M448 191.52a288 288 0 00-383.44 0" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="42" /><path d="M300.67 384L256 433l-44.34-49a56.73 56.73 0 0188.92 0z" /></svg>
    </SvgContainer>
  )
}


WifiSharp.defaultProps = {
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


WifiSharp.propTypes = {
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


export default WifiSharp