import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Ear = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M256 16C159 16 80 95 80 192v206.57a97.59 97.59 0 0028 68.49A94.51 94.51 0 00176 496c36.86 0 67.18-15.62 90.12-46.42 4.48-6 9.55-14.74 15.42-24.85 15.32-26.37 36.29-62.47 63.17-80.74 25.77-17.51 47.23-39.54 62-63.72C423.51 252.94 432 223.24 432 192c0-97-78.95-176-176-176zm96 184a16 16 0 01-16-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.42c27.19-7.84 58.4-6.72 64.28-6.42a48 48 0 0138.6 75.9c-.3.41-.61.81-.95 1.2-16.55 19-36 45.48-38.46 55a16 16 0 01-30.94-8.14c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 00239.82 240h-.88c-16.6-.89-45.89.8-62.94 8.31V304a16 16 0 01-32 0V184c0-57.35 50.24-104 112-104s112 46.65 112 104a16 16 0 01-16 16z"/></svg>
    </SvgContainer>
  )
}


Ear.defaultProps = {
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


Ear.propTypes = {
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


export default Ear