import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CardSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Card</title><path d="M32 416a16 16 0 0016 16h416a16 16 0 0016-16V222H32zm66-138a8 8 0 018-8h92a8 8 0 018 8v64a8 8 0 01-8 8h-92a8 8 0 01-8-8zM464 80H48a16 16 0 00-16 16v66h448V96a16 16 0 00-16-16z"/></svg>
    </SvgContainer>
  )
}


CardSharp.defaultProps = {
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


CardSharp.propTypes = {
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


export default CardSharp