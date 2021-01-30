import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Stopwatch = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Stopwatch</title><circle cx="256" cy="272" r="16"/><path d="M280 81.5V72a24 24 0 00-48 0v9.5a191 191 0 00-84.43 32.13L137 103a24 24 0 00-34 34l8.6 8.6A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V152a16 16 0 0132 0v74.75A48 48 0 01256 320z"/></svg>
    </SvgContainer>
  )
}


Stopwatch.defaultProps = {
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


Stopwatch.propTypes = {
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


export default Stopwatch