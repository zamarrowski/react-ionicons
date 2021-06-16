import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const MedkitSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path fill="none" d="M168 72h176v24H168z" /><path d="M484 96H384V40a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v360a12 12 0 0012 12h456a12 12 0 0012-12V108a12 12 0 00-12-12zM168 72h176v24H168zm184 238h-74v74h-44v-74h-74v-44h74v-74h44v74h74z" /></svg>
    </SvgContainer>
  )
}


MedkitSharp.defaultProps = {
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


MedkitSharp.propTypes = {
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


export default MedkitSharp