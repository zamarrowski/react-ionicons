import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const NotificationsOffCircleSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zM144 308l28-36v-32.3a131.83 131.83 0 012.34-25.42L285.92 336H144zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32zm93.48-3.74l-211-227 23.68-21.52 211 227zM368 330.85l-.32-.38-155.5-169.63a73.4 73.4 0 0115.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z" /></svg>
    </SvgContainer>
  )
}


NotificationsOffCircleSharp.defaultProps = {
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


NotificationsOffCircleSharp.propTypes = {
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


export default NotificationsOffCircleSharp