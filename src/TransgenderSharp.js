import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const TransgenderSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M480 448.94l-48.94-49.08L464 366.92l-31.1-31.11-32.9 32.9-23.55-23.61a149.64 149.64 0 00-.1-178.45l59.55-59.56V144h44V32h-112v44h36.87l-59.55 59.55a149.65 149.65 0 00-178.59 0l-7.55-7.55 33-33L161 63.88l-33 33L107.09 76H144V32H32v112h44v-36.91L96.87 128l-33 33L95 192.05l33-33 7.56 7.57A149.18 149.18 0 00106 255.94c0 82.69 67.27 150 150 150a149.12 149.12 0 0089.44-29.67l23.51 23.58-33.14 33.05 31.11 31.1 33-33 48.9 49zm-330-193a106 106 0 11106 106 106.09 106.09 0 01-106-106z" /></svg>
    </SvgContainer>
  )
}


TransgenderSharp.defaultProps = {
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


TransgenderSharp.propTypes = {
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


export default TransgenderSharp