import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBeaker = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M340.8 832h374c12.6 0 28.8-8.6 40.2-20.4 7.6-7.8 11-23.2 11-43.8v-415.8h-478v414c0 21.6 5.2 39.4 13.8 50.2 8.2 10.4 21.4 15.8 39 15.8z M890.4 96h-633.4c-108.8 0-129 55.8-129 80.4 60.6 8.4 64 8.4 64 72.4 0 32 0 551 0 551 0 70.6 57.8 128 128.4 128h415.6c70.8 0 126-58.4 126-129v-620.4c4-35 25-63.2 27.2-66.6 2.4-3.8 6.8-8.8 6.8-11 0-2.4-0.6-4.8-5.6-4.8zM798 768c0 23.4-3.8 49.2-20.2 66-16.2 16.6-40.4 30-63 30h-374c-57.4 0-84.8-41.4-84.8-98v-446h542v448z"></path>
    </SVG>
  )
}


IosBeaker.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBeaker.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosBeaker
