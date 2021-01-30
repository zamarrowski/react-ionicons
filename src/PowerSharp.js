import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const PowerSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Power</title><path d="M256 464c-114.69 0-208-93.23-208-207.82a207.44 207.44 0 0174.76-160.13l16.9-14 28.17 33.72-16.9 14A163.72 163.72 0 0092 256.18c0 90.39 73.57 163.93 164 163.93s164-73.54 164-163.93a163.38 163.38 0 00-59.83-126.36l-17-14 28-33.82 17 14A207.13 207.13 0 01464 256.18C464 370.77 370.69 464 256 464z"/><path d="M234 48h44v224h-44z"/></svg>
    </SvgContainer>
  )
}


PowerSharp.defaultProps = {
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


PowerSharp.propTypes = {
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


export default PowerSharp