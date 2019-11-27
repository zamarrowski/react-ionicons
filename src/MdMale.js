import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdMale = props => {
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
      <path d="M832 96h-256v96h188.2l-213.4 213.2c-47-33.4-104.6-53.2-166.8-53.2-159 0-288 129-288 288s129 288 288 288 288-129 288-288c0-62.2-19.8-119.8-53.2-166.8l213.2-213.4v188.2h96v-352h-96zM384 832c-105.8 0-192-86.2-192-192s86.2-192 192-192 192 86.2 192 192-86.2 192-192 192z"></path>
    </SVG>
  )
}


MdMale.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdMale.propTypes = {
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


export default MdMale
