import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ReturnDownForwardOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 352l64-64-64-64"/><path d="M448 288H154c-58.76 0-106-49.33-106-108v-20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}


ReturnDownForwardOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


ReturnDownForwardOutline.propTypes = {
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


export default ReturnDownForwardOutline