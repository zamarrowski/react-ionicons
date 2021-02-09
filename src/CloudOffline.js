import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CloudOffline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M448 464a15.92 15.92 0 01-11.31-4.69l-384-384a16 16 0 0122.62-22.62l384 384A16 16 0 01448 464zM38.72 196.78C13.39 219.88 0 251.42 0 288c0 36 14.38 68.88 40.49 92.59C65.64 403.43 99.56 416 136 416h192.8a8 8 0 005.66-13.66L100.88 168.76a8 8 0 00-8-2C72 173.15 53.4 183.38 38.72 196.78zM476.59 391.23C499.76 372.78 512 345.39 512 312c0-57.57-42-90.58-87.56-100.75a16 16 0 01-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 00256 64c-31.12 0-60.12 9-84.62 26.1a8 8 0 00-1.14 12.26L461.68 393.8a8 8 0 0010.2.93q2.43-1.68 4.71-3.5z"/></svg>
    </SvgContainer>
  )
}


CloudOffline.defaultProps = {
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


CloudOffline.propTypes = {
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


export default CloudOffline