import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Flask = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Flask</title><path d="M452.32 365L327.4 167.12a48.07 48.07 0 01-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 64h16v77.48a47.92 47.92 0 01-7.41 25.63L59.68 365a74 74 0 00-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 00-2.5-75.79zM211.66 184.2A79.94 79.94 0 00224 141.48V68a4 4 0 014-4h56a4 4 0 014 4v73.48a79.94 79.94 0 0012.35 42.72l57.8 91.53a8 8 0 01-6.78 12.27H160.63a8 8 0 01-6.77-12.27z"/></svg>'}} />
    </SvgContainer>
  )
}


Flask.defaultProps = {
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


Flask.propTypes = {
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


export default Flask