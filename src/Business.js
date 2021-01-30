import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Business = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Business</title><path d="M432 176H320V64a48 48 0 00-48-48H80a48 48 0 00-48 48v416a16 16 0 0016 16h104a8 8 0 008-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01192 416v72a8 8 0 008 8h264a16 16 0 0016-16V224a48 48 0 00-48-48zM98.08 431.87a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 240a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 320a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zM444 464H320V208h112a16 16 0 0116 16v236a4 4 0 01-4 4z"/><path d="M400 400a16 16 0 1016 16 16 16 0 00-16-16zM400 320a16 16 0 1016 16 16 16 0 00-16-16zM400 240a16 16 0 1016 16 16 16 0 00-16-16zM336 400a16 16 0 1016 16 16 16 0 00-16-16zM336 320a16 16 0 1016 16 16 16 0 00-16-16zM336 240a16 16 0 1016 16 16 16 0 00-16-16z"/></svg>
    </SvgContainer>
  )
}


Business.defaultProps = {
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


Business.propTypes = {
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


export default Business