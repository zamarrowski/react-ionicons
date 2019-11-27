import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRefreshCircle = props => {
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
      <path d="M512 96c-228.8 0-416 187.2-416 416s187.2 416 416 416 416-187.2 416-416-187.2-416-416-416zM736 484h-196l89.6-89.6c-29.4-30.8-71.4-50.4-117.6-50.4-92.4 0-168 75.6-168 168s75.6 168 168 168c69.8 0 130.6-42.4 155.2-104h59.6c-27.8 92.6-112.6 160-214.8 160-124.6 0-224-100.8-224-224s100.8-224 224-224c61.6 0 117.6 25.2 158.2 65.8l65.8-65.8v196z"></path>
    </SVG>
  )
}


MdRefreshCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRefreshCircle.propTypes = {
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


export default MdRefreshCircle
