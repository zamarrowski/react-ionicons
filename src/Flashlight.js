import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Flashlight = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M462 216c9.35-9.35 15.14-19.09 17.19-28.95 2.7-12.95-1.29-25.55-11.22-35.48L360.43 44.05C346.29 29.92 322 24.07 296 50l-2 2a8 8 0 000 11.32L448.64 218a8 8 0 0011.36 0zM250.14 153.08l-.16 2.34c-.53 7.18-6.88 19.15-13.88 26.14L47.27 370.36c-11.12 11.11-16.46 25.57-15.05 40.7C33.49 424.58 40.16 438 51 448.83L63.17 461c12.61 12.6 27.78 19 42.49 19a50.4 50.4 0 0036-15.24l188.84-188.8c7.07-7.07 18.84-13.3 26.17-13.87 17.48-1.32 43.57-3.28 67.79-15.65a4 4 0 001-6.37L271.69 86.31a4 4 0 00-6.39 1c-12.12 22.99-13.82 46.91-15.16 65.77zm-9.95 146.83a20 20 0 110-25.25 20 20 0 010 25.25z" /></svg>
    </SvgContainer>
  )
}


Flashlight.defaultProps = {
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


Flashlight.propTypes = {
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


export default Flashlight