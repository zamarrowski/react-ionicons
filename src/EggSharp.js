import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const EggSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M418.39 381.05c-8.08 21.68-19.76 40.1-34.72 54.75-14.38 14.07-32.1 24.95-52.67 32.34C309.08 476 283.85 480 256 480s-53.08-4-75-11.86c-20.57-7.39-38.29-18.27-52.67-32.34-15-14.65-26.64-33.07-34.72-54.75C84.58 356.82 80 328.53 80 296.94c0-30.28 6.68-62.57 19.86-96A371 371 0 01151 111.42C195.78 53.56 241 32 256 32s62.67 22.4 105 79.42c18.33 24.71 38.87 58.34 51.17 89.54 13.18 33.41 19.86 65.7 19.86 96-.03 31.57-4.61 59.86-13.64 84.09z" /></svg>
    </SvgContainer>
  )
}


EggSharp.defaultProps = {
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


EggSharp.propTypes = {
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


export default EggSharp