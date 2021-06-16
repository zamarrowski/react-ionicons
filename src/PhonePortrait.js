import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const PhonePortrait = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z" /><path d="M336 48a11.88 11.88 0 00-9.53 4.69A48 48 0 01288 72h-64a48 48 0 01-38.47-19.31A11.88 11.88 0 00176 48a16 16 0 00-16 16v384a16 16 0 0016 16h160a16 16 0 0016-16V64a16 16 0 00-16-16z" /><path d="M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z" /></svg>
    </SvgContainer>
  )
}


PhonePortrait.defaultProps = {
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


PhonePortrait.propTypes = {
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


export default PhonePortrait