import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosDisc = props => {
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
      <path d="M512 331.6c-99.8 0-180.6 80.8-180.6 180.6s80.8 180.4 180.6 180.4 180.6-80.8 180.6-180.4c0-99.8-80.8-180.6-180.6-180.6zM512 592.8c-44.6 0-80.8-36.2-80.8-80.8s36.2-80.8 80.8-80.8 80.8 36.2 80.8 80.8-36.2 80.8-80.8 80.8z M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM512 740c-126 0-228-102.2-228-228s102-228 228-228 228 102 228 228-102 228-228 228z"></path>
    </SVG>
  )
}


IosDisc.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosDisc.propTypes = {
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


export default IosDisc
