import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CalculatorOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<rect x="112" y="48" width="288" height="416" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160.01 112H352v64H160.01z" /><circle cx="168" cy="248" r="24" /><circle cx="256" cy="248" r="24" /><circle cx="344" cy="248" r="24" /><circle cx="168" cy="328" r="24" /><circle cx="256" cy="328" r="24" /><circle cx="168" cy="408" r="24" /><circle cx="256" cy="408" r="24" /><rect x="320" y="304" width="48" height="128" rx="24" ry="24" /></svg>
    </SvgContainer>
  )
}


CalculatorOutline.defaultProps = {
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


CalculatorOutline.propTypes = {
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


export default CalculatorOutline