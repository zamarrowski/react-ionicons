import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const LogOutSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M160 240h160V96a16 16 0 00-16-16H64a16 16 0 00-16 16v320a16 16 0 0016 16h240a16 16 0 0016-16V272H160zM459.31 244.69L368 153.37 345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 000-22.62z" /></svg>
    </SvgContainer>
  )
}


LogOutSharp.defaultProps = {
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


LogOutSharp.propTypes = {
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


export default LogOutSharp