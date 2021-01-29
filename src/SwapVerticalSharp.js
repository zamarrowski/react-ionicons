import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const SwapVerticalSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Swap Vertical</title><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96"/></svg>'}} />
    </SvgContainer>
  )
}


SwapVerticalSharp.defaultProps = {
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


SwapVerticalSharp.propTypes = {
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


export default SwapVerticalSharp