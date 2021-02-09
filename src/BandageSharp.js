import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BandageSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M27.71 337.1a40 40 0 000 56.54l90.65 90.65a40 40 0 0056.54 0l75.1-75.1L102.81 262zM496 147.1a39.87 39.87 0 00-11.75-28.38l-91-91a40.14 40.14 0 00-56.75 0L264 100.28 411.72 248l72.53-72.53A39.85 39.85 0 00496 147.1zM273.06 386.19l116-116L241.77 123l-116 116zm19.63-141.5a16 16 0 110 22.62 16 16 0 010-22.62zm-48-48a16 16 0 110 22.62 16 16 0 010-22.62zm0 96a16 16 0 110 22.62 16 16 0 010-22.62zm-25.38-48a16 16 0 11-22.62 0 16 16 0 0122.62 0z"/></svg>
    </SvgContainer>
  )
}


BandageSharp.defaultProps = {
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


BandageSharp.propTypes = {
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


export default BandageSharp