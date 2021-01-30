import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Tennisball = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Tennisball</title><path d="M448 256a192.55 192.55 0 0032-2.68A224 224 0 00258.68 32 192.55 192.55 0 00256 64c0 105.87 86.13 192 192 192zM253.35 480c.94-5.67 1.65-11.4 2.09-17.18.37-4.88.56-9.86.56-14.79 0-105.87-86.13-192-192-192a192.55 192.55 0 00-32 2.68A224 224 0 00253.35 480z"/><path d="M289.61 222.39A222.53 222.53 0 01224 64a226.07 226.07 0 012-30A224.1 224.1 0 0034 226a226.07 226.07 0 0130-2 222.53 222.53 0 01158.39 65.61A222.53 222.53 0 01288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 00478 286a226.07 226.07 0 01-30 2 222.53 222.53 0 01-158.39-65.61z"/></svg>
    </SvgContainer>
  )
}


Tennisball.defaultProps = {
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


Tennisball.propTypes = {
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


export default Tennisball