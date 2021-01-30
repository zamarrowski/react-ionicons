import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const SyncCircleSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Sync Circle</title><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm0 320a112.19 112.19 0 01-111.27-98.23l-8.86 8.86L113.24 256l46-46 47.55 45.48-22.12 23.12-7.2-6.88a80.26 80.26 0 00138.48 37.5l23.77 21.41A112.82 112.82 0 01256 368zm96.79-66l-47.55-45.5 22.12-23.12 6.86 6.55A80.2 80.2 0 00196 202.64l-23.82-21.37A112.18 112.18 0 01367 242.49l9.11-9.12L398.76 256z"/></svg>
    </SvgContainer>
  )
}


SyncCircleSharp.defaultProps = {
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


SyncCircleSharp.propTypes = {
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


export default SyncCircleSharp