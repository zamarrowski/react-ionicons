import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const DocumentLockSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Document Lock</title><path d="M276 192h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42V188a4 4 0 004 4zM256 272c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z"/><path d="M248 224a8 8 0 01-8-8V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224zm88 175.91A16.1 16.1 0 01319.91 416H192.09A16.1 16.1 0 01176 399.91V320c0-10 7-16 16-16h16v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18h16a15.8 15.8 0 0116 16z"/></svg>
    </SvgContainer>
  )
}


DocumentLockSharp.defaultProps = {
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


DocumentLockSharp.propTypes = {
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


export default DocumentLockSharp