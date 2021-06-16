import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BedSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M432 224V96a16 16 0 00-16-16H96a16 16 0 00-16 16v128a48 48 0 00-48 48v160h36v-32h376v32h36V272a48 48 0 00-48-48zm-192 0H120v-32a16 16 0 0116-16h88a16 16 0 0116 16zm32-32a16 16 0 0116-16h88a16 16 0 0116 16v32H272z" /></svg>
    </SvgContainer>
  )
}


BedSharp.defaultProps = {
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


BedSharp.propTypes = {
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


export default BedSharp