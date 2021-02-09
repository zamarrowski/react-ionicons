import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const LogoAndroid = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M380.91 199l42.47-73.57a8.63 8.63 0 00-3.12-11.76 8.52 8.52 0 00-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 10-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55zM138.45 327.65a21.46 21.46 0 1121.46-21.46 21.47 21.47 0 01-21.46 21.46zm235 0A21.46 21.46 0 11395 306.19a21.47 21.47 0 01-21.51 21.46z"/></svg>
    </SvgContainer>
  )
}


LogoAndroid.defaultProps = {
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


LogoAndroid.propTypes = {
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


export default LogoAndroid