import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const FootballOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15zM332.09 238.98l52.87-22.4 25.78-73.26M447 269.97l-62.04-53.39M179.91 238.98l-52.87-22.4-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64M192 74.93l64 42.65M312 320l28 48-28 71M410.74 368H342M200 320l-28 48 28.37 71.5M101.63 368H172"/></svg>
    </SvgContainer>
  )
}


FootballOutline.defaultProps = {
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


FootballOutline.propTypes = {
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


export default FootballOutline