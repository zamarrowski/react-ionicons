import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Subway = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M352 16H160a64.07 64.07 0 00-64 64v256a64.07 64.07 0 0064 64h192a64.07 64.07 0 0064-64V80a64.07 64.07 0 00-64-64zM208 64h96a16 16 0 010 32h-96a16 16 0 010-32zm-32 288a32 32 0 1132-32 32 32 0 01-32 32zm160 0a32 32 0 1132-32 32 32 0 01-32 32zm48-160a16 16 0 01-16 16H144a16 16 0 01-16-16v-32a16 16 0 0116-16h224a16 16 0 0116 16zM347.31 420.69a16 16 0 00-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 00-22.62-22.62l-48 48a16 16 0 1022.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0022.62-22.62z"/></svg>
    </SvgContainer>
  )
}


Subway.defaultProps = {
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


Subway.propTypes = {
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


export default Subway