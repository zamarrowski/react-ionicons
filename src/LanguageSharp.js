import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const LanguageSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M363 176L246 464h47.24l24.49-58h90.54l24.49 58H480zm-26.69 186L363 279.85 389.69 362zM272 320c-.25-.19-20.59-15.77-45.42-42.67 39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22 6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57.92 1.21 1.85 2.39 2.78 3.57-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36 19.3-11.47c2.2-1.67 41.33-24 92-80.78 24.52 26.28 43.22 40.83 44.3 41.67L255 362z" /></svg>
    </SvgContainer>
  )
}


LanguageSharp.defaultProps = {
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


LanguageSharp.propTypes = {
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


export default LanguageSharp