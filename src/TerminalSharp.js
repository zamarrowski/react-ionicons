import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const TerminalSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M16 44v424a12 12 0 0012 12h456a12 12 0 0012-12V44a12 12 0 00-12-12H28a12 12 0 00-12 12zm57.51 193.5l76.88-61.5-76.88-61.5 20-25 108.1 86.5L93.5 262.49zM272 256h-96v-32h96z" /></svg>
    </SvgContainer>
  )
}


TerminalSharp.defaultProps = {
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


TerminalSharp.propTypes = {
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


export default TerminalSharp