import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdContract = props => {
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
      <path d="M128 742.4h153.59v153.6h102.41v-256h-256v102.4zM281.59 281.6h-153.59v102.4h256v-256h-102.41v153.6zM640 896h102.4v-153.6h153.6v-102.4h-256v256zM742.4 281.6v-153.6h-102.4v256h256v-102.4h-153.6z"></path>
    </SVG>
  )
}


MdContract.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdContract.propTypes = {
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


export default MdContract
