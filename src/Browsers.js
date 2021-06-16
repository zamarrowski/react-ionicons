import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Browsers = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M416 48H96a64 64 0 00-64 64v288a64 64 0 0064 64h320a64 64 0 0064-64V112a64 64 0 00-64-64zm24 96H72a8 8 0 01-8-8v-24a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v24a8 8 0 01-8 8z" /></svg>
    </SvgContainer>
  )
}


Browsers.defaultProps = {
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


Browsers.propTypes = {
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


export default Browsers