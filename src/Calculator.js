import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Calculator = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M416 80a48.05 48.05 0 00-48-48H144a48.05 48.05 0 00-48 48v352a48.05 48.05 0 0048 48h224a48.05 48.05 0 0048-48zM168 432a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm88 160a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm112 136a24 24 0 01-48 0v-80a24 24 0 0148 0zm-24-136a24 24 0 1124-24 24 24 0 01-24 24zm19.31-100.69A16 16 0 01352 176H160a16 16 0 01-16-16V96a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-4.69 11.31z"/></svg>
    </SvgContainer>
  )
}


Calculator.defaultProps = {
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


Calculator.propTypes = {
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


export default Calculator