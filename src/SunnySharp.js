import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const SunnySharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M234 26h44v92h-44zM234 394h44v92h-44zM338.025 142.857l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zM26 234h92v44H26zM338.029 369.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"/></svg>
    </SvgContainer>
  )
}


SunnySharp.defaultProps = {
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


SunnySharp.propTypes = {
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


export default SunnySharp