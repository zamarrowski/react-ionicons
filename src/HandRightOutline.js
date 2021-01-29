import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const HandRightOutline = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Hand Right</title><path d="M432 320V144a32 32 0 00-32-32h0a32 32 0 00-32 32v112M368 256V80a32 32 0 00-32-32h0a32 32 0 00-32 32v160M240 241V96a32 32 0 00-32-32h0a32 32 0 00-32 32v224M304 240V48a32 32 0 00-32-32h0a32 32 0 00-32 32v192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'}} />
    </SvgContainer>
  )
}


HandRightOutline.defaultProps = {
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


HandRightOutline.propTypes = {
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


export default HandRightOutline