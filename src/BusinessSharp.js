import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BusinessSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M320 176V16H32v480h128v-96h32v96h288V176zM112 432H80v-32h32zm0-80H80v-32h32zm0-80H80v-32h32zm0-80H80v-32h32zm0-80H80V80h32zm128-32h32v32h-32zm-48 272h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32zm0-80h-32V80h32zm80 320h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32v32zm176 272H320v-32h32v-32h-32v-48h32v-32h-32v-48h32v-32h-32v-32h128z" /><path d="M384 400h32v32h-32zM384 320h32v32h-32zM384 240h32v32h-32z" /></svg>
    </SvgContainer>
  )
}


BusinessSharp.defaultProps = {
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


BusinessSharp.propTypes = {
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


export default BusinessSharp