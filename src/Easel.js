import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Easel = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<rect x="80" y="112" width="352" height="208" rx="12" ry="12" /><path d="M432 64H272V48a16 16 0 00-32 0v16H80a48.05 48.05 0 00-48 48v208a48.05 48.05 0 0048 48h42.79l-26.17 91.6a16 16 0 1030.76 8.8L156.07 368H240v48a16 16 0 0032 0v-48h83.93l28.69 100.4a16 16 0 1030.76-8.8L389.21 368H432a48.05 48.05 0 0048-48V112a48.05 48.05 0 00-48-48zm16 256a16 16 0 01-16 16H80a16 16 0 01-16-16V112a16 16 0 0116-16h352a16 16 0 0116 16z" /></svg>
    </SvgContainer>
  )
}


Easel.defaultProps = {
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


Easel.propTypes = {
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


export default Easel