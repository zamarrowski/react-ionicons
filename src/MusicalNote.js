import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const MusicalNote = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Musical Note</title><path d="M183.83 480a55.2 55.2 0 01-32.36-10.55A56.64 56.64 0 01128 423.58a50.26 50.26 0 0134.14-47.73L213 358.73a16.25 16.25 0 0011-15.49V92a32.1 32.1 0 0124.09-31.15l108.39-28.14A22 22 0 01384 54v57.75a32.09 32.09 0 01-24.2 31.19l-91.65 23.13A16.24 16.24 0 00256 181.91V424a48.22 48.22 0 01-32.78 45.81l-21.47 7.23a56 56 0 01-17.92 2.96z"/></svg>
    </SvgContainer>
  )
}


MusicalNote.defaultProps = {
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


MusicalNote.propTypes = {
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


export default MusicalNote