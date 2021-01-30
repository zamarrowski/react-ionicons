import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CloudDone = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Cloud Done</title><path d="M424.44 227.25a16 16 0 01-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 00256 80c-35.5 0-68.24 11.69-94.68 33.8a156.24 156.24 0 00-42 56 16 16 0 01-11.37 9.15c-27 5.62-51.07 17.34-69.18 33.87C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-57.57-42-90.58-87.56-100.75zm-95.2-8.94l-107.8 128a16 16 0 01-12 5.69h-.27a16 16 0 01-11.88-5.28l-45.9-50.87c-5.77-6.39-5.82-16.33.3-22.4a16 16 0 0123.16.63l33.9 37.58 96-114a16 16 0 1124.48 20.62z"/></svg>
    </SvgContainer>
  )
}


CloudDone.defaultProps = {
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


CloudDone.propTypes = {
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


export default CloudDone