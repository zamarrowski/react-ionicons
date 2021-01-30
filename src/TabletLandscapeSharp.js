import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const TabletLandscapeSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Tablet Landscape</title><path d="M0 82v348a18 18 0 0018 18h476a18 18 0 0018-18V82a18 18 0 00-18-18H18A18 18 0 000 82zm448 330H64V100h384z"/></svg>
    </SvgContainer>
  )
}


TabletLandscapeSharp.defaultProps = {
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


TabletLandscapeSharp.propTypes = {
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


export default TabletLandscapeSharp