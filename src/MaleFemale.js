import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const MaleFemale = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M426 16h-74a22 22 0 000 44h20.89l-37.1 37.09A157.68 157.68 0 00216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 000 44h28v36a22 22 0 0044 0v-36h28a22 22 0 000-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 00-14-64.92l44-44V112a22 22 0 0044 0V38a22 22 0 00-22-22zM216 314a114 114 0 11114-114 114.13 114.13 0 01-114 114z"/></svg>
    </SvgContainer>
  )
}


MaleFemale.defaultProps = {
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


MaleFemale.propTypes = {
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


export default MaleFemale