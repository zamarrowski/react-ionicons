import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const VolumeOffOutline = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Volume Off</title><path d="M237.65 192H168a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'}} />
    </SvgContainer>
  )
}


VolumeOffOutline.defaultProps = {
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


VolumeOffOutline.propTypes = {
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


export default VolumeOffOutline