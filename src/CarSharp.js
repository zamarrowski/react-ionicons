import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CarSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Car</title><path d="M447.68 220.78a16.44 16.44 0 00-1-3.1l-48-112A16 16 0 00384 96H128a16 16 0 00-14.71 9.7l-48 112a16.44 16.44 0 00-1 3.1A16.15 16.15 0 0064 224v184a8 8 0 008 8h32a8 8 0 008-8v-24h288v24a8 8 0 008 8h32a8 8 0 008-8V224a16.15 16.15 0 00-.32-3.22zM144 320a32 32 0 1132-32 32 32 0 01-32 32zm224 0a32 32 0 1132-32 32 32 0 01-32 32zM104.26 208l34.29-80h234.9l34.29 80z"/></svg>
    </SvgContainer>
  )
}


CarSharp.defaultProps = {
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


CarSharp.propTypes = {
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


export default CarSharp