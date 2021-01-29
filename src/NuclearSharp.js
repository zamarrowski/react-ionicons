import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const NuclearSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Nuclear</title><circle cx="256" cy="256" r="48"/><path d="M223.47 335.59l-51.71 68a169.73 169.73 0 00168.48 0l-51.71-68" fill="none"/><path d="M403.08 108.92a208 208 0 00-294.16 294.16 208 208 0 00294.16-294.16zM342 256a86.13 86.13 0 01-53.47 79.59l51.71 68a169.73 169.73 0 01-168.48 0l51.71-68a86 86 0 01-50.56-101.77l-85.48.09a170.21 170.21 0 0173.83-119l37.94 76.59a85.78 85.78 0 01113.6 0l37.94-76.59a170.21 170.21 0 0173.83 119l-85.48-.09A85.87 85.87 0 01342 256z"/></svg>'}} />
    </SvgContainer>
  )
}


NuclearSharp.defaultProps = {
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


NuclearSharp.propTypes = {
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


export default NuclearSharp