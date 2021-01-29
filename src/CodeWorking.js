import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CodeWorking = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Code Working</title><circle cx="256" cy="256" r="26" stroke="currentColor" stroke-miterlimit="10" stroke-width="10"/><circle cx="346" cy="256" r="26" stroke="currentColor" stroke-miterlimit="10" stroke-width="10"/><circle cx="166" cy="256" r="26" stroke="currentColor" stroke-miterlimit="10" stroke-width="10"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" d="M160 368L32 256l128-112M352 368l128-112-128-112"/></svg>'}} />
    </SvgContainer>
  )
}


CodeWorking.defaultProps = {
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


CodeWorking.propTypes = {
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


export default CodeWorking