import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ManOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M208 208v264a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M256 336v136a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V208" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M208 192v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88a48 48 0 0148-48h96a48 48 0 0148 48v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="56" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}


ManOutline.defaultProps = {
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


ManOutline.propTypes = {
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


export default ManOutline