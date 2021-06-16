import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Woman = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<circle cx="255.75" cy="56" r="56" /><path d="M394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 00-43-32.08h-120a44.84 44.84 0 00-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0025.6-13.18l25.58-85.25 2.17-7.23a8 8 0 0115.53 2.62 7.78 7.78 0 01-.17 1.61L155.43 347.4a16 16 0 0015.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0015.33-20.6l-43.74-145.81a7.52 7.52 0 01-.16-1.59 8 8 0 0115.54-2.63l2.17 7.23 25.57 85.25A20 20 0 00382.05 303c10.27-3.44 15.69-14.71 12.58-25.1z" /></svg>
    </SvgContainer>
  )
}


Woman.defaultProps = {
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


Woman.propTypes = {
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


export default Woman