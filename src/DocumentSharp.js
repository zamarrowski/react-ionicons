import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const DocumentSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Document</title><path d="M240 216V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224H248a8 8 0 01-8-8z"/><path d="M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z"/></svg>
    </SvgContainer>
  )
}


DocumentSharp.defaultProps = {
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


DocumentSharp.propTypes = {
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


export default DocumentSharp