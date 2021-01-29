import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const SchoolSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>School</title><path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z"/><path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z"/></svg>'}} />
    </SvgContainer>
  )
}


SchoolSharp.defaultProps = {
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


SchoolSharp.propTypes = {
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


export default SchoolSharp